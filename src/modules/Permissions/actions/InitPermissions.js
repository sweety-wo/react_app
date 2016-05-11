import { ApiClient } from 'core/api';

const API = new ApiClient();
const InitPermissions = {};

// Action
InitPermissions.Action = 'INIT_PERMISSIONS';

// Reducer
InitPermissions.Reducer = (state, action) => ({
  ...state,
  initialized: true,
  permissions: action.payload,
});

// Payload Creators
InitPermissions.PayloadCreator = () => (
  API.request('SpRole', 'listRoles', {})
);

export default InitPermissions;
