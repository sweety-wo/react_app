import { Module } from 'reductor';
import LogsContainer from './LogsContainer.jsx';
import { InitLogs } from './actions/';
import { InitClouds } from '../Clouds/actions/';
import { InitWorkspaces } from '../Workspaces/actions/';

const LogsModule = new Module();

LogsModule
  .name('Logs')
  .version('1.0.0');

// Initial State
const InitialState = {
  initialized: false,
  logData: [],
  clouds: [],
  workspaces: [],
};

LogsModule
  .initialState(InitialState)
  .on(InitLogs.Action, InitLogs.Reducer, InitLogs.PayloadCreator)
  .on(InitClouds.Action, InitClouds.Reducer, InitClouds.PayloadCreator)
  .on(InitWorkspaces.Action, InitWorkspaces.Reducer, InitWorkspaces.PayloadCreator)
  .component('LogsContainer', LogsContainer);

export default LogsModule;
