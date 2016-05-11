import { ApiClient } from 'core/api';

const API = new ApiClient();
const DeleteTenant = {};

// Action
DeleteTenant.Action = 'DELETE_TENANT';

// Reducer
DeleteTenant.Reducer = (state) => ({
  ...state,
  initialized: true,
});

// Payload Creators
DeleteTenant.PayloadCreator = (clId, id) => (
  API.request('Tenant', 'deleteTenant', { cloudId: clId, id })
);

export default DeleteTenant;
