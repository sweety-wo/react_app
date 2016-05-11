import { ApiClient } from 'core/api';

const API = new ApiClient();
const DeleteCalendar = {};

// Action
DeleteCalendar.Action = 'DELETE_CALENDAR';

// Reducer
DeleteCalendar.Reducer = (state) => ({
  ...state,
  initialized: true,
});

// Payload Creators
DeleteCalendar.PayloadCreator = (id) => (
  API.request('ResourceCalendar', 'deleteResourceCalendar', { id })
);

export default DeleteCalendar;
