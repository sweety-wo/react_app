import { Module } from 'reductor';
import WorkspacesContainer from './WorkspacesContainer.jsx';
import WorkspaceContainer from './WorkspaceContainer.jsx';
import NewWorkspaceContainer from './NewWorkspaceContainer.jsx';
import AppStoreContainer from './AppStoreContainer.jsx';
import DashboardContainer from './DashboardContainer.jsx';
import {
  InitWorkspaces,
  InitWorkspace,
  DeleteWorkspace,
  CreateWorkspace,
  UpdateWorkspace,
  TestWorkspace,
} from './actions/';

import { InitConnectors } from '../Connectors/actions/';

const WorkspacesModule = new Module();

WorkspacesModule
  .name('Workspaces')
  .version('1.0.0');

WorkspacesModule
  .setInitialState({
    initialized: false,
    workspaces: [],
    workspace: {},
    success: false,
    connectors: [],
  });

WorkspacesModule
  .component('WorkspacesContainer', WorkspacesContainer)
  .component('WorkspaceContainer', WorkspaceContainer)
  .component('NewWorkspaceContainer', NewWorkspaceContainer)
  .component('DashboardContainer', DashboardContainer)
  .component('AppStoreContainer', AppStoreContainer);

WorkspacesModule
  .on(InitWorkspaces.Action, InitWorkspaces.Reducer, InitWorkspaces.PayloadCreator)
  .on(InitWorkspace.Action, InitWorkspace.Reducer, InitWorkspace.PayloadCreator)
  .on(CreateWorkspace.Action, CreateWorkspace.Reducer, CreateWorkspace.PayloadCreator)
  .on(UpdateWorkspace.Action, UpdateWorkspace.Reducer, UpdateWorkspace.PayloadCreator)
  .on(DeleteWorkspace.Action, DeleteWorkspace.Reducer, DeleteWorkspace.PayloadCreator)
  .on(TestWorkspace.Action, TestWorkspace.Reducer, TestWorkspace.PayloadCreator)
  .on(InitConnectors.Action, InitConnectors.Reducer, InitConnectors.PayloadCreator);

export default WorkspacesModule;
