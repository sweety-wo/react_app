import { ApiClient } from 'core/api';

const API = new ApiClient();
const InitWorkflow = {};

// Action
InitWorkflow.Action = 'INIT_WORKFLOW';

// Reducer
InitWorkflow.Reducer = (state, action) => ({
  ...state,
  initializedWorkflow: true,
  workflow: action.payload,

});

// Payload Creators
InitWorkflow.PayloadCreator = (id) => (
  API.request('WorkflowExecution', 'tasks', { executionId: id })
);

export default InitWorkflow;
