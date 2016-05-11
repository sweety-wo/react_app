import { ApiClient } from 'core/api';

const API = new ApiClient();
const InitWorkflows = {};

// Action
InitWorkflows.Action = 'INIT_WORKFLOWS';

// Reducer
InitWorkflows.Reducer = (state, action) => ({
  ...state,
  initialized: true,
  workflows: action.payload,

});

// Payload Creators
InitWorkflows.PayloadCreator = () => (
  API.request('WorkflowExecution', 'executions', {})
);

export default InitWorkflows;
