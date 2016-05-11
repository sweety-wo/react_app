import { ApiClient } from 'core/api';

const API = new ApiClient();
const InitUsers = {};

// Action
InitUsers.Action = 'INIT_USERS';

// Reducer
InitUsers.Reducer = (state, action) => ({
  ...state,
  initializedUser: true,
  users: action.payload,
});

// Payload Creators
InitUsers.PayloadCreator = (wsId) => (
  API.request(
    'WorkspaceUsers',
    'listUserViews',
    {
      wsId,
    }
  )
);

export default InitUsers;
