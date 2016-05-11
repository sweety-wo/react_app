import { ApiClient } from 'core/api';

const API = new ApiClient();
const UpdateCloud = {};

// Action
UpdateCloud.Action = 'UPDATE_CLOUD';

// Reducer
UpdateCloud.Reducer = (state, action) => ({
  ...state,
  initialized: true,
  cloud: action.payload,
});

// Payload Creators
UpdateCloud.PayloadCreator = (id, input) => (
  API.request('Cloud', 'updateCloud', { id, model: input })
);

export default UpdateCloud;
