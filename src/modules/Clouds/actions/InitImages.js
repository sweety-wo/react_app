import { ApiClient } from 'core/api';

const API = new ApiClient();
const InitImages = {};

// Action
InitImages.Action = 'INIT_IMAGES';

// Reducer
InitImages.Reducer = (state, action) => ({
  ...state,
  initialized: true,
  images: action.payload,
});

// Payload Creators
InitImages.PayloadCreator = (id) => (
  API.request('GoldImage', 'listGoldImages', { cloudId: id })
);

export default InitImages;
