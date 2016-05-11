import { Module } from 'reductor';
import UsersContainer from './UsersContainer.jsx';
import UserContainer from './UserContainer.jsx';
import { InitUsers } from './actions/';
import { InitWorkspaces } from '../Workspaces/actions/';

const UsersModule = new Module();

UsersModule
  .name('Users')
  .version('1.0.0');

// Initial State
UsersModule
  .setInitialState({
    initialized: false,
    initializedUser: false,
    users: [],
  });

const UsersSelector = (state, ownProps) => ({
  spInfo: state['module/session'].loginProfile,
  ...state['module/users'],
  params: ownProps.params,
});

UsersModule
  .component('UsersContainer', UsersContainer, UsersSelector)
  .component('UserContainer', UserContainer);

UsersModule
  .on(InitUsers.Action, InitUsers.Reducer, InitUsers.PayloadCreator)
  .on(InitWorkspaces.Action, InitWorkspaces.Reducer, InitWorkspaces.PayloadCreator);

export default UsersModule;
