import { ApiClient } from 'core/api';

const API = new ApiClient();
const CreateCloud = {};

// Action
CreateCloud.Action = 'CREATE_CLOUD';

// Reducer
CreateCloud.Reducer = (state, action) => ({
  ...state,
  initialized: true,
  cloud: action.payload,
  clouds: [...state.clouds, action.payload],
});

// Payload Creators
CreateCloud.PayloadCreator = (input) => (
  API.request('Cloud', 'createCloud', { model: input })
);

export default CreateCloud;
