import { ApiClient } from 'core/api';

const API = new ApiClient();
const InitWorkspace = {};

// Action
InitWorkspace.Action = 'INIT_WORKSPACE';

// Reducer
InitWorkspace.Reducer = (state, action) => ({
  ...state,
  initialized: true,
  workspace: action.payload,
});

// Payload Creators
InitWorkspace.PayloadCreator = (id) => (
  API.request('Workspace', 'getWorkspace', { id })
);

export default InitWorkspace;
