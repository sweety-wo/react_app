import { ApiClient } from 'core/api';

const API = new ApiClient();
const UpdateCalendar = {};

// Action
UpdateCalendar.Action = 'UPDATE_CALENDAR';

// Reducer
UpdateCalendar.Reducer = (state, action) => ({
  ...state,
  initialized: true,
  calendar: action.payload,
});

// Payload Creators
UpdateCalendar.PayloadCreator = (id) => (
  API.request('ResourceCalendar', 'updateResourceCalendar', { id })
);

export default UpdateCalendar;
