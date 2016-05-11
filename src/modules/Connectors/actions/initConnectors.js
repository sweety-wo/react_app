import { ApiClient } from 'core/api';

const API = new ApiClient();
const InitConnectors = {};

// Action
InitConnectors.Action = 'INIT_CONNECTORS';

// Reducer
InitConnectors.Reducer = (state, action) => ({
  ...state,
  initialized: true,
  connectors: action.payload,
});

// Payload Creators
InitConnectors.PayloadCreator = () => (
  API.request('Connector', 'listConnectors', {})
);

export default InitConnectors;
