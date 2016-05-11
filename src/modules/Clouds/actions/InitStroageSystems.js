import { ApiClient } from 'core/api';

const API = new ApiClient();
const InitStorageSystems = {};

// Action
InitStorageSystems.Action = 'INIT_STORAGE_SYSTEMS';

// Reducer
InitStorageSystems.Reducer = (state, action) => ({
  ...state,
  initialized: true,
  storageSystems: action.payload,
});

// Payload Creators
InitStorageSystems.PayloadCreator = (id) => (
  API.request('StorageSystem', 'listStorageSystems', { cloudId: id })
);

export default InitStorageSystems;
