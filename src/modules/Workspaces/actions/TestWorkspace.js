import { ApiClient } from 'core/api';

const API = new ApiClient();
const TestWorkspace = {};

// Action
TestWorkspace.Action = 'TEST_WORKSPACE';

// Reducer
TestWorkspace.Reducer = (state, action) => ({
  ...state,
  initialized: true,
  success: action.payload,
});

// Payload Creators
TestWorkspace.PayloadCreator = (id, input) => (
  API.request('Workspace', 'testWorkspace', { wsId: id, model: input })
);

export default TestWorkspace;
