import { ApiClient } from 'core/api';

const API = new ApiClient();
const UpdateWorkspace = {};

// Action
UpdateWorkspace.Action = 'UPDATE_WORKSPACE';

// Reducer
UpdateWorkspace.Reducer = (state, action) => ({
  ...state,
  initialized: true,
  workspace: action.payload,
});

// Payload Creators
UpdateWorkspace.PayloadCreator = (id, input) => (
  API.request('Workspace', 'updateWorkspace', { id, model: input })
);

export default UpdateWorkspace;
