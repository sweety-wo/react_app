import { ApiClient } from 'core/api';

const API = new ApiClient();
const UpdateConnector = {};

// Action
UpdateConnector.Action = 'UPDATE_CONNECTOR';

// Reducer
UpdateConnector.Reducer = (state, action) => ({
  ...state,
  initialized: true,
  connector: action.payload,
});

// Payload Creators
UpdateConnector.PayloadCreator = (input) => (
  API.request('Connector', 'updateConnector', { input })
);

export default UpdateConnector;
