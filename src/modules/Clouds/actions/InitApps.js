import { ApiClient } from 'core/api';

const API = new ApiClient();
const InitApps = {};

// Action
InitApps.Action = 'INIT_APPS';

// Reducer
InitApps.Reducer = (state, action) => ({
  ...state,
  initialized: true,
  apps: action.payload,
});

// Payload Creators
InitApps.PayloadCreator = (gId) => (
  API.request('Application', 'goldApps', { goldImageId: gId })
);

export default InitApps;
