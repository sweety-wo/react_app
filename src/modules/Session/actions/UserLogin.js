import { ApiClient } from 'core/api';
const API = new ApiClient();

const UserLogin = {};

UserLogin.Action = 'USER_LOGIN';

UserLogin.Reducer = {
  // Success Handler
  next: (state, action) => ({
    ...state,
    sessionId: action.payload.sessionId,
    accessLevel: action.payload.accessLevel,
    user: {
      id: action.payload.userId,
      logo: action.payload.userLogo,
      name: action.payload.name,
    },
  }),
  // Error Handler
  throw: (state, action) => ({
    ...state,
    error: action.payload,
  }),
};

// Payload Creators
UserLogin.PayloadCreator = (input) => (
  API.login(input)
);

export default UserLogin;
