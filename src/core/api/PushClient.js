import EventSource from 'eventsource';
import { getLogger } from 'reductor';
import { ApiClient } from 'core/api';
import invariant from 'invariant';

const LOG = getLogger('PushClient');

let INSTANCE = null;

class PushClient {

  constructor() {
    if (!INSTANCE) {
      this._apiClient = new ApiClient();

      this._eventSource = null;
      this._connectionEstablished = false;
      this._subscriptions = new Map();

      INSTANCE = this;
    }

    return INSTANCE;
  }

  setEventHandler(handler) {
    this._eventHandler = handler;
  }

  subscribe(eventType) {
    // If we don't have a connection yet open one
    if (!this._connectionEstablished) {
      this._openConnection();
    }

    // If we already have a subscription for the event type return it
    if (this._subscriptions.has(eventType)) {
      return Promise.resolve(this._subscriptions.get(eventType));
    }

    return this._apiClient.post(`/events/subscriptions/${eventType}`)
      .then((response) => {
        LOG.debug(`Successfully subscribed to ${eventType}`, response);
        this._subscriptions.set(eventType, response.data);
        return response.data;
      }).error((response) => {
        LOG.error(`Couldn't subscribe to ${eventType}`, response);
        return {};
      });
  }

  cancel(eventType) {
    invariant(this._subscriptions.has(eventType), `No subscription for EventType ${eventType}`);

    const subscription = this._subscriptions.get(eventType);

    this._apiClient.delete(`/events/subscriptions/${subscription}`)
      .then((response) => {
        LOG.debug(
          `Sucessfully cancelled subscription for EventType ${eventType} with ID ${subscription}`,
          response);

        this._subscriptions.delete(eventType);
      }).error((response) => {
        LOG.error(`Couldn't cancel ${eventType}`, response);
      });

    if (this._subscriptions.size === 0) this._closeConnection();
  }

  getEventTypes() {
    return this._apiClient.get('/events/types')
      .then((response) => response.data)
      .catch((response) => {
        LOG.error('Unable to fetch event types', response);
        return [];
      });
  }

  sendTestEvent() {
    this.ApiClient.post('/events/test')
      .then((response) => {
        LOG.debug('Successfully posted test event.', response);
      });
  }

  _openConnection() {
    invariant(
      this._apiClient.isAuthorized(),
      'Can not establish SSE connection without authorization.'
    );

    this._eventSource = new EventSource(
      this._apiClient.getApiUrl('/events'),
      {
        headers: {
          Authorization: `Session ${this._apiClient.getSessionId()}`,
        },
      }
    );

    this._eventSource.onopen = this._handleConnect.bind(this);
    this._eventSource.onmessage = this._handleEvent.bind(this);
    this._eventSource.onerror = this._handleError.bind(this);
  }

  _closeConnection() {
    this._eventSource.close();
  }

  _handleConnect() {
    LOG.debug('SSE connection successfully established.');
  }

  _handleEvent(event) {
    LOG.debug('Received SSE event:', event);
    this._eventHandler(event);
  }

  _handleError(error) {
    LOG.debug('Received SSE error:', error);
  }

}

export default PushClient;
