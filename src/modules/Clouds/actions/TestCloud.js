import { ApiClient } from 'core/api';

const API = new ApiClient();
const TestCloud = {};

// Action
TestCloud.Action = 'TEST_CLOUD';

// Reducer
TestCloud.Reducer = (state, action) => ({
  ...state,
  initialized: true,
  success: action.payload,
});

// Payload Creators
TestCloud.PayloadCreator = (id, input) => (
  API.request('Cloud', 'testCloud', { clId: id, model: input })
);

export default TestCloud;
