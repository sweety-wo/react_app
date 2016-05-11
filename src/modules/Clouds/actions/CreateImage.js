import { ApiClient } from 'core/api';

const API = new ApiClient();
const CreateImage = {};

// Action
CreateImage.Action = 'CREATE_IMAGE';

// Reducer
CreateImage.Reducer = (state, action) => ({
  ...state,
  initialized: true,
  image: action.payload,
  images: [...state.images, action.payload],
});

// Payload Creators
CreateImage.PayloadCreator = (input, id, iId, sId) => (
  API.request('GoldImage', 'createGoldImage', { cloudId: id, storageSystem: sId, imageId: iId, model: input })
);

export default CreateImage;
