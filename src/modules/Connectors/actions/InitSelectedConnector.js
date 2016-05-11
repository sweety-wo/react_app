import { ApiClient } from 'core/api';

const API = new ApiClient();
const InitSelectedConnector = {};

// Action
InitSelectedConnector.Action = 'INIT_SELECTED_CONNECTOR';

// Reducer
InitSelectedConnector.Reducer = (state, action) => ({
  ...state,
  initialized: true,
  connector: action.payload,
});

// Payload Creators
InitSelectedConnector.PayloadCreator = (id) => (
  API.request('Connector', 'getConnector', { id })
);

export default InitSelectedConnector;
