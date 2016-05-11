import { ApiClient } from 'core/api';

const API = new ApiClient();
const InitSelectedImage = {};

// Action
InitSelectedImage.Action = 'INIT_SELECTED_IMAGE';

// Reducer
InitSelectedImage.Reducer = (state, action) => ({
  ...state,
  initialized: true,
  image: action.payload,
});

// Payload Creators
InitSelectedImage.PayloadCreator = (clId, id) => (
  API.request('GoldImage', 'getGoldImage', { cloudId: clId, id })
);

export default InitSelectedImage;
