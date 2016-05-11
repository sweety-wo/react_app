import { ApiClient } from 'core/api';

const API = new ApiClient();
const InitCloud = {};

// Action
InitCloud.Action = 'INIT_CLOUD';

// Reducer
InitCloud.Reducer = (state, action) => ({
  ...state,
  initialized: true,
  cloud: action.payload,
});

// Payload Creators
InitCloud.PayloadCreator = (id) => (
  API.request('Cloud', 'getCloud', { id })
);

export default InitCloud;
