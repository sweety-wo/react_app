import { ApiClient } from 'core/api';

const API = new ApiClient();
const FetchTimezones = {};

// Action
FetchTimezones.Action = 'FETCH_TIMEZONES';

// Reducer
FetchTimezones.Reducer = (state, action) => ({
  ...state,
  initializedTimezones: true,
  timezones: action.payload,
});

// Payload Creators
FetchTimezones.PayloadCreator = () => (
  API.request(
    'System',
    'timezones',
    {
    }
  )
);

export default FetchTimezones;
