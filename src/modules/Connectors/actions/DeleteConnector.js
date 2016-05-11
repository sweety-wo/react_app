import { ApiClient } from 'core/api';

const API = new ApiClient();
const DeleteConnector = {};

// Action
DeleteConnector.Action = 'DELETE_CONNECTOR';

// Reducer
DeleteConnector.Reducer = (state) => ({
  ...state,
  initialized: true,

});

// Payload Creators
DeleteConnector.PayloadCreator = (id) => (
  API.request('Connector', 'deleteConnector', { id })
);

export default DeleteConnector;
