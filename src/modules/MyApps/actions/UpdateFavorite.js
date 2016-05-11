import { ApiClient } from 'core/api';

const API = new ApiClient();
const UpdateFavorite = {};

// Action
UpdateFavorite.Action = 'UPDATE_FAVORITE';

// Reducer
UpdateFavorite.Reducer = (state, action) => ({
  ...state,
  initialized: true,
  favorite: action.payload,
});

// Payload Creators
UpdateFavorite.PayloadCreator = (userId, id, input) => (
  API.request('UserApplication', 'updateUserApplication', {
    userId,
    id,
    model: input,
  })
);

export default UpdateFavorite;
