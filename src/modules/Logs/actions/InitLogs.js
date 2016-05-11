import { ApiClient } from 'core/api';

const API = new ApiClient();
const InitLogs = {};

// Action
InitLogs.Action = 'INIT_LOGS';

// Reducer
InitLogs.Reducer = (state, action) => ({
  ...state,
  initialized: true,
  logData: action.payload.events,

});

// Payload Creators
InitLogs.PayloadCreator = (input) => (
  API.request(
    'System',
    'log',
    {
      query: input,
    }
  )
);

export default InitLogs;
