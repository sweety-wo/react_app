import { ApiClient } from 'core/api';

const API = new ApiClient();
const DeleteCloud = {};

// Action
DeleteCloud.Action = 'DELETE_CLOUD';

// Reducer
DeleteCloud.Reducer = (state) => ({
  ...state,
  initialized: true,
});

// Payload Creators
DeleteCloud.PayloadCreator = (id) => (
  API.request('Cloud', 'deleteCloud', { id })
);

export default DeleteCloud;
