import { ApiClient } from 'core/api';

const API = new ApiClient();
const InitSelectedCalendar = {};

// Action
InitSelectedCalendar.Action = 'INIT_SELECTED_CALENDAR';

// Reducer
InitSelectedCalendar.Reducer = (state, action) => ({
  ...state,
  initialized: true,
  calendar: action.payload,
});

// Payload Creators
InitSelectedCalendar.PayloadCreator = (id) => (
  API.request('ResourceCalendar', 'getResourceCalendar', { id })
);

export default InitSelectedCalendar;
