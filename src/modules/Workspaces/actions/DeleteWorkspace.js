import { ApiClient } from 'core/api';

const API = new ApiClient();
const DeleteWorkspace = {};

// Action
DeleteWorkspace.Action = 'DELETE_WORKSPACE';

// Reducer
DeleteWorkspace.Reducer = (state) => ({
  ...state,
  initialized: true,
});

// Payload Creators
DeleteWorkspace.PayloadCreator = (id) => (
  API.request('Workspace', 'deleteWorkspace', { id })
);

export default DeleteWorkspace;
