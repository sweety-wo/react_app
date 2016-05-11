import { ApiClient } from 'core/api';

const API = new ApiClient();
const SearchLogs = {};

// Action
SearchLogs.Action = 'SEARCH_LOGS';

// Reducer
SearchLogs.Reducer = (state, action) => ({
  ...state,
  initialized: true,
  logData: action.payload.events,
});

// Payload Creators
SearchLogs.PayloadCreator = (input) => (
  API.request(
    'System',
    'log',
    {
      query: { input },
    }
  )
);

export default SearchLogs;
