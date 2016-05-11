import { ApiClient } from 'core/api';

const API = new ApiClient();
const FetchProfile = {};

// Action
FetchProfile.Action = 'FETCH_PROFILE';

// Reducer
FetchProfile.Reducer = (state, action) => ({
  ...state,
  initializedProfile: true,
  userprofile: action.payload,
});

// Payload Creators
FetchProfile.PayloadCreator = (id) => (
  API.request(
    'SpProfile',
    'getSpProfile',
    {
      id,
    }
  )
);

export default FetchProfile;
