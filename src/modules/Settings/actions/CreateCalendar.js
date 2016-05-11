import { ApiClient } from 'core/api';

const API = new ApiClient();
const CreateCalendar = {};

// Action
CreateCalendar.Action = 'CREATE_CALENDAR';

// Reducer
CreateCalendar.Reducer = (state, action) => ({
  ...state,
  initialized: true,
  calendar: action.payload,
});

// Payload Creators
CreateCalendar.PayloadCreator = () => (
  API.request('ResourceCalendar', 'createResourceCalendar', { })
);

export default CreateCalendar;
