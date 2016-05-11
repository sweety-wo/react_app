import { ApiClient } from 'core/api';

const API = new ApiClient();
const InitBootableImages = {};

// Action
InitBootableImages.Action = 'INIT_BOOTABLE_IMAGES';

// Reducer
InitBootableImages.Reducer = (state, action) => ({
  ...state,
  initialized: true,
  bootableImages: action.payload,
});

// Payload Creators
InitBootableImages.PayloadCreator = (id, storageSystemId) => (
  API.request('StorageSystem', 'getBootableImages', { cloudId: id, storageId: storageSystemId })
);

export default InitBootableImages;
