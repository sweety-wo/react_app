import { ApiClient } from 'core/api';

const API = new ApiClient();
const InitWorkspaces = {};

// Action
InitWorkspaces.Action = 'INIT_WORKSPACES';

// Reducer
InitWorkspaces.Reducer = (state, action) => ({
  ...state,
  initialized: true,
  workspaces: action.payload,
});

// Payload Creators
InitWorkspaces.PayloadCreator = () => (
  API.request('Workspace', 'listWorkspaces', {})
);

export default InitWorkspaces;
