import { ApiClient } from 'core/api';

const API = new ApiClient();
const InitCalendars = {};

// Action
InitCalendars.Action = 'INIT_CALENDARS';

// Reducer
InitCalendars.Reducer = (state, action) => ({
  ...state,
  initialized: true,
  calendars: action.payload,
});

// Payload Creators
InitCalendars.PayloadCreator = () => (
  API.request('ResourceCalendar', 'listResourceCalendars', { })
);

export default InitCalendars;
