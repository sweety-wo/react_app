import { ApiClient } from 'core/api';
const API = new ApiClient();

const ProfileSaved = {};

ProfileSaved.Action = 'PROFILE_SAVED';

ProfileSaved.Reducer = {
  // Success Handler

  next: (state) => ({
    ...state,
  }),

  // Error Handler
  throw: (state, action) => ({
    ...state,
    error: action.payload,
  }),
};

// Payload Creators
ProfileSaved.PayloadCreator = (input) => (
  API.request(
    'SpProfile',
    'updateSpProfile',
    {
      id: Window.spInfo.spId,
      model: input,
    }
  )
);

export default ProfileSaved;
