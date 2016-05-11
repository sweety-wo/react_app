import { ApiClient } from 'core/api';

const API = new ApiClient();
const InitVirtualMachines = {};

// Action
InitVirtualMachines.Action = 'INIT_VIRTUAL_MACHINES';

// Reducer
InitVirtualMachines.Reducer = (state, action) => ({
  ...state,
  initialized: true,
  vmData: action.payload,
});

// Payload Creators
InitVirtualMachines.PayloadCreator = () => (
  API.request('CloudGuest', 'listGuestViews', { cloudId: 'e763cfba-042e-41e9-9e60-671683f09a07' })
);

export default InitVirtualMachines;
