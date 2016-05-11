import { Module } from 'reductor';
import PermissionsContainer from './PermissionsContainer.jsx';
import { InitPermissions } from './actions/';

const PermissionsModule = new Module();

PermissionsModule
  .name('Permissions')
  .version('1.0.0');

// Initial State
const InitialState = {
  initialized: false,
  permissions: [],
};

PermissionsModule
  .initialState(InitialState)
  .on(InitPermissions.Action, InitPermissions.Reducer, InitPermissions.PayloadCreator)
  .component('PermissionsContainer', PermissionsContainer);

export default PermissionsModule;
