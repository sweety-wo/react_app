import { ApiClient } from 'core/api';

const API = new ApiClient();
const CreateWorkspace = {};

// Action
CreateWorkspace.Action = 'CREATE_WORKSPACE';

// Reducer
CreateWorkspace.Reducer = (state, action) => ({
  ...state,
  initialized: true,
  workspace: action.payload,
  workspaces: [...state.workspaces, action.payload],
});

// Payload Creators
CreateWorkspace.PayloadCreator = (input) => (
  API.request('Workspace', 'createWorkspace', { model: input })
);

export default CreateWorkspace;
