import { ApiClient } from 'core/api';
const API = new ApiClient();

const UserLogout = {};

UserLogout.Action = 'USER_LOGOUT';

UserLogout.Reducer = (state) => ({
  ...state,
  sessionId: null,
  accessLevel: null,
  user: {},
  permissions: [],
});

UserLogout.PayloadCreator = () => (
  API.logout()
);

export default UserLogout;
