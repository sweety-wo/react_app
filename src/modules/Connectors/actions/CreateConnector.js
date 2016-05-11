import { ApiClient } from 'core/api';

const API = new ApiClient();
const CreateConnector = {};

// Action
CreateConnector.Action = 'CREATE_CONNECTOR';

// Reducer
CreateConnector.Reducer = (state, action) => ({
  ...state,
  initialized: true,
  connector: action.payload,
  connectors: [...state.connectors, action.payload],
});

// Payload Creators
CreateConnector.PayloadCreator = (input) => (
  API.request('Connector', 'createConnector', { input })
);

export default CreateConnector;
