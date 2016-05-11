import { ApiClient } from 'core/api';

const API = new ApiClient();
const UpdateTenant = {};

// Action
UpdateTenant.Action = 'UPDATE_TENANT';

// Reducer
UpdateTenant.Reducer = (state, action) => ({
  ...state,
  initialized: true,
  tenant: action.payload,
});

// Payload Creators
UpdateTenant.PayloadCreator = (clId, id, input) => (
  API.request('Tenant', 'updateTenant', { cloudId: clId, id, model: input })
);

export default UpdateTenant;
