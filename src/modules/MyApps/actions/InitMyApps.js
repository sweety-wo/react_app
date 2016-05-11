import { ApiClient } from 'core/api';

const API = new ApiClient();
const InitMyApps = {};

// Action
InitMyApps.Action = 'INIT_MY_APPS';

// Reducer
InitMyApps.Reducer = (state, action) => ({
  ...state,
  initialized: true,
  applications: action.payload,
});

// Payload Creators
InitMyApps.PayloadCreator = (userId) => (
  API.request(
    'UserApplication',
    'listUserApplications',
    { userId })
);

export default InitMyApps;
