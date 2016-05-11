import { ApiClient } from 'core/api';

const API = new ApiClient();
const DeleteImage = {};

// Action
DeleteImage.Action = 'DELETE_IMAGE';

// Reducer
DeleteImage.Reducer = (state) => ({
  ...state,
  initialized: true,
});

// Payload Creators
DeleteImage.PayloadCreator = (clId, id) => (
  API.request('GoldImage', 'deleteGoldImage', { cloudId: clId, id })
);

export default DeleteImage;
