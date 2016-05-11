/**
 * Javascript client to the Vertiscale REST API
 * @author Marcel Bensch
 * @flow
 */
import { getLogger } from 'reductor';
import SwaggerClient from 'swagger-client';
import { startsWith } from 'lodash';
import axios from 'axios';

const LOG = getLogger('ApiClient');

let INSTANCE = null;

/**
 * API client for the Vertiscale API.
 *
 * @class ApiClient
 */
class ApiClient {

  constructor() {
    if (!INSTANCE) {
      this._isReady = false;
      this._isAuthorized = false;
      this._authHeader = null;
      this._pendingRequests = [];
      this._lastResponse = {};
      this._apiUrl = `${window.location.protocol}//${window.location.host}/api/v1`;
      this._swaggerUrl = `${this._apiUrl}/swagger.json`;
      this._initSwaggerClient();
      INSTANCE = this;
    }

    return INSTANCE;
  }

  /**
   * Sends an API request using Swagger resources.
   * @param {string} resource - The Swagger resource.
   * @param {string} method - The method to call on the resource.
   * @param {object} [payload] - The parameters to pass to the method call.
   * @returns {Promise} - A promise that returns an API response when resolved.
   */
  request(resource, method, payload = {}) {
    const request = { resource, method, payload };

    if (this._isReady) {
      LOG.debug('Making API Request: ', request);
      return this._makeSwaggerRequest(request);
    }

    LOG.debug('Client not ready, deferring API Request: ', request);
    return this._deferRequest(request);
  }

  // ---------------------------------------------------------------------------------------------//
  // Convenience Methods

  /**
   * Convenience method that makes a login request and
   * authorizes the API client if login was successful.
   * @param data
   * @returns {*|Promise.<*>|Request} - A promise that returns an API response when resolved.
   */
  login(data) {
    const promise = this.request('Session', 'login', data);

    promise
      .then((response) => {
        this.authorize(response.sessionId);
      });

    return promise;
  }

  /**
   * Convenience method to logout a user and de-authorizes the API client.
   * @returns {*|Promise.<*>|Request} - A promise that returns an API response when resolved.
   */
  logout() {
    const promise = this.request('Session', 'logout');

    promise.then(() => {
      this.client.clientAuthorizations.remove('Session');
      this._isAuthorized = false;
    });

    return promise;
  }

  // ---------------------------------------------------------------------------------------------//
  // HTTP Abstractions
  get(endpoint, data = {}, headers = {}) {
    return this.httpRequest('get', this._buildUri(endpoint), data, headers);
  }

  delete(endpoint, data = {}, headers = {}) {
    return this.httpRequest('delete', this._buildUri(endpoint), data, headers);
  }

  post(endpoint, data = {}, headers = {}) {
    return this.httpRequest('post', this._buildUri(endpoint), data, headers);
  }

  put(endpoint, data = {}, headers = {}) {
    return this.httpRequest('put', this._buildUri(endpoint), data, headers);
  }

  httpRequest(method, url, data = {}, headers = {}) {
    const config = { method, url, data, headers };

    if (this._isAuthorized) {
      config.headers = { ...config.headers, Authorization: this._authHeader };
    }

    return axios(config);
  }

  // ---------------------------------------------------------------------------------------------//
  // Helper Methods

  /**
   * Authorizes the API client
   * @param {string} sessionId - The Session ID
   * @private
   */
  authorize(sessionId) {
    LOG.debug('Authorizing API Client with Session ID: ', sessionId);

    this._authHeader = `Session ${sessionId}`;

    this.client.clientAuthorizations.add(
      'apiKey',
      new SwaggerClient.ApiKeyAuthorization(
        'Authorization',
        this._authHeader,
        'header'
      )
    );

    this._isAuthorized = true;
  }

  /**
   * Returns whether or not the client is authorized via Session ID.
   * @returns {boolean}
   */
  isAuthorized() {
    return this._isAuthorized;
  }

  /**
   * Returns the Session ID
   * @returns {string|*|null}
   */
  getSessionId() {
    return this._sessionId;
  }

  /**
   * Returns the API Url
   * @returns {*|string}
   */
  getApiUrl(endpoint = null) {
    if (endpoint) return this._buildUri(endpoint);
    return this._apiUrl;
  }

  /**
   * Returns the last response that was received by
   * the API client.
   *
   * @returns {T|*|axios.Response}
   */
  getLastResponse() {
    return this._lastResponse;
  }

  // ---------------------------------------------------------------------------------------------//
  // Private API

  /**
   * Builds a full API URI based on a given endpoint.
   * @param {string} endpoint
   * @returns {string}
   * @private
   */
  _buildUri(endpoint) {
    if (!startsWith(endpoint, '/')) {
      return `${this._apiUrl}/${endpoint}`;
    }

    return `${this._apiUrl}${endpoint}`;
  }

  /**
   * Initializes the swagger-js client.
   * @private
   */
  _initSwaggerClient() {
    LOG.debug('Initializing Client with Swagger URL: ', this._swaggerUrl);

    const CLIENT = new SwaggerClient({
      url: this._swaggerUrl,
      usePromise: true,
    });

    CLIENT.then((client) => {
      this.client = client;
      this._clientReady();
      LOG.debug('SwaggerClient successfully initialized.');
    });

    CLIENT.catch((error) => {
      LOG.error('Error initializing SwaggerClient: ', error);
    });
  }

  /**
   * Callback when client becomes ready.
   * Processes all deferred requests.
   * @private
   */
  _clientReady() {
    this._isReady = true;

    LOG.debug('API Client became ready. Processing deferred requests.');

    if (this._pendingRequests.length) {
      this._pendingRequests.forEach((deferred) => {
        this._makeSwaggerRequest(deferred.request)
          .then((value) => deferred.promise.resolve(value))
          .catch((value) => deferred.promise.reject(value));
      });
    }

    LOG.debug(`Finished processing ${this._pendingRequests.length} deferred requests.`);
    this._pendingRequests = [];
  }

  /**
   * Makes an API request and returns the transformed response.
   * The last raw result can be retrieved by getLastResponse()
   * @param resource
   * @param method
   * @param payload
   * @returns {Promise}
   * @private
   */
  _makeSwaggerRequest({ resource, method, payload }) {
    return new Promise((resolve, reject) => {
      this.client[resource][method](payload)
        .then((response) => {
          this._lastResponse = response;
          resolve(response.obj);
        })
        .catch((response) => {
          this._lastResponse = response;
          reject(response.obj);
        });
    });
  }

  /**
   * Defers a request until the swagger client becomes ready.
   * @param request
   * @returns {Promise}
   * @private
   */
  _deferRequest(request) {
    let resolve;
    let reject;

    const promise = new Promise((_resolve, _reject) => {
      resolve = _resolve.bind(this);
      reject = _reject.bind(this);
    });

    this._pendingRequests.push({ promise: { resolve, reject }, request });

    return promise;
  }
}

export default ApiClient;
