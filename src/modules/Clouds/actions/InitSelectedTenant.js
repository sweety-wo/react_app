import { ApiClient } from 'core/api';

const API = new ApiClient();
const InitSelectedTenant = {};

// Action
InitSelectedTenant.Action = 'INIT_SELECTED_TENANT';

// Reducer
InitSelectedTenant.Reducer = (state, action) => ({
  ...state,
  initialized: true,
  tenant: action.payload,
});

// Payload Creators
InitSelectedTenant.PayloadCreator = (clId, id) => (
  API.request('Tenant', 'getTenant', { cloudId: clId, id })
);

export default InitSelectedTenant;
