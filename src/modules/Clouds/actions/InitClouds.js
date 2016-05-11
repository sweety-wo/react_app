import { ApiClient } from 'core/api';

const API = new ApiClient();
const InitClouds = {};

// Action
InitClouds.Action = 'INIT_CLOUDS';

// Reducer
InitClouds.Reducer = (state, action) => ({
  ...state,
  initialized: true,
  clouds: action.payload,
});

// Payload Creators
InitClouds.PayloadCreator = () => (
  API.request('Cloud', 'listClouds', {})
);

export default InitClouds;
