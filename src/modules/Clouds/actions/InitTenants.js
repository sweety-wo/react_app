import { ApiClient } from 'core/api';

const API = new ApiClient();
const InitTenants = {};

// Action
InitTenants.Action = 'INIT_TENANTS';

// Reducer
InitTenants.Reducer = (state, action) => ({
  ...state,
  initialized: true,
  tenants: action.payload,
});

// Payload Creators
InitTenants.PayloadCreator = (id) => (
  API.request('Tenant', 'listTenants', { cloudId: id })
);

export default InitTenants;
