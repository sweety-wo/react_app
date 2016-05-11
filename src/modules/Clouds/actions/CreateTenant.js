import { ApiClient } from 'core/api';

const API = new ApiClient();
const CreateTenant = {};

// Action
CreateTenant.Action = 'CREATE_TENANT';

// Reducer
CreateTenant.Reducer = (state, action) => ({
  ...state,
  initialized: true,
  tenant: action.payload,
});

// Payload Creators
CreateTenant.PayloadCreator = (id, input) => (
  API.request('Tenant', 'createTenant', { cloudId: id, model: input })
);

export default CreateTenant;
