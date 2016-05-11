// Framework Imports
import 'babel-polyfill';
import { Application } from 'reductor';
import React from 'react';
import { Route, IndexRedirect } from 'react-router';
import promiseMiddleware from 'redux-promise';
import { checkAuth } from 'core/security';

// Constants for Development purposes
const ENV = process.env.NODE_ENV || 'development';
const DevTools = window.devToolsExtension ? window.devToolsExtension() : f => f;

// Global Static Asset Imports
import 'static/robots.txt';

// Import all modules that you want to load here
import {
  SessionModule,
  DashboardModule,
  MyAppsModule,
  WorkspacesModule,
  UsersModule,
  PermissionsModule,
  CloudsModule,
  VirtualMachinesModule,
  ConnectorsModule,
  WorkflowsModule,
  SystemHealthModule,
  LogsModule,
  SettingsModule,
  HelpModule,
  ErrorPagesModule,
} from 'modules';

import { PushPlugin } from 'plugins';

// Bootstrap the application
const VertiscaleUI = new Application();

VertiscaleUI
  .name('Vertiscale')
  .version('1.15.0');

// Enable DevTools in development mode
if (ENV === 'development') {
  VertiscaleUI
    .addEnhancer(DevTools)
    .debug();
}

// Add Middleware
VertiscaleUI
  .addMiddleware(promiseMiddleware);

// Add Modules to the Application instance
VertiscaleUI
  .addModule(SessionModule)
  .addModule(DashboardModule)
  .addModule(MyAppsModule)
  .addModule(WorkspacesModule)
  .addModule(UsersModule)
  .addModule(PermissionsModule)
  .addModule(CloudsModule)
  .addModule(VirtualMachinesModule)
  .addModule(ConnectorsModule)
  .addModule(WorkflowsModule)
  .addModule(SystemHealthModule)
  .addModule(LogsModule)
  .addModule(SettingsModule)
  .addModule(HelpModule)
  .addModule(ErrorPagesModule)
  .addPlugin(PushPlugin);

// Define Routes
VertiscaleUI.setRoutes(
  <Route>
    <Route path="/" component={SessionModule.getComponent('LandingPage')} />
    <Route path="/:locator" component={SessionModule.getComponent('SessionContainer')}>
      <IndexRedirect to="login" />
      <Route path="login" component={SessionModule.getComponent('LoginContainer')} />
      <Route component={checkAuth(SessionModule.getComponent('SecureContainer'))} >
        <IndexRedirect to="dashboard" />
        {/* DO NOT CHANGE ANYTHING ABOVE THIS LINE */}
        {/* All routes and subroutes to modules should go here*/}
        <Route path="dashboard" component={DashboardModule.getComponent('DashboardContainer')} />
        <Route path="my-apps" component={MyAppsModule.getComponent('MyAppsContainer')} />
        <Route path="workspaces" component={WorkspacesModule.getComponent('WorkspacesContainer')} />
        <Route path="workspaces/:id" component={WorkspacesModule.getComponent('WorkspaceContainer')} />
        <Route path="workspaces/:id/dashboard" component={WorkspacesModule.getComponent('DashboardContainer')} />
        <Route path="workspaces/:id/appStore" component={WorkspacesModule.getComponent('AppStoreContainer')} />
        <Route path="workspaces/workspace/new" component={WorkspacesModule.getComponent('NewWorkspaceContainer')} />
        <Route path="users" component={UsersModule.getComponent('UsersContainer')} />
        <Route path="users/:id" component={UsersModule.getComponent('UserContainer')} />
        <Route path="permissions" component={PermissionsModule.getComponent('PermissionsContainer')} />
        <Route path="clouds" component={CloudsModule.getComponent('CloudsContainer')} />
        <Route path="clouds/:id" component={CloudsModule.getComponent('CloudContainer')} />
        <Route path="clouds/cloud/new" component={CloudsModule.getComponent('NewCloudContainer')} />
        <Route path="clouds/:id/images" component={CloudsModule.getComponent('ImagesContainer')} />
        <Route path="clouds/:id/images/:gid" component={CloudsModule.getComponent('SelectedImageContainer')} />
        <Route path="clouds/:id/images/image/new" component={CloudsModule.getComponent('NewImageContainer')} />
        <Route path="clouds/:id/tenants" component={CloudsModule.getComponent('TenantsContainer')} />
        <Route path="clouds/:id/tenants/:tid" component={CloudsModule.getComponent('SelectedTenantContainer')} />
        <Route path="virtual-machines" component={VirtualMachinesModule.getComponent('VirtualMachinesContainer')} />
        <Route path="connectors" component={ConnectorsModule.getComponent('ConnectorsContainer')} />
        <Route path="connectors/connector/new" component={ConnectorsModule.getComponent('NewConnectorContainer')} />
        <Route path="connectors/:id" component={ConnectorsModule.getComponent('SelectedConnectorContainer')} />
        <Route path="workflows" component={WorkflowsModule.getComponent('WorkflowsContainer')} />
        <Route path="workflows/:id" component={WorkflowsModule.getComponent('WorkflowContainer')} />
        <Route path="system-health" component={SystemHealthModule.getComponent('SystemHealthContainer')} />
        <Route path="logs" component={LogsModule.getComponent('LogsContainer')} />
        <Route path="settings/profile" component={SettingsModule.getComponent('ProfileContainer')} />
        <Route path="settings/certs" component={SettingsModule.getComponent('CertificatesContainer')} />
        <Route path="settings/calendars" component={SettingsModule.getComponent('CalendarsContainer')} />
        <Route path="help" component={HelpModule.getComponent('HelpContainer')} />
        <Route path="error/:id" component={ErrorPagesModule.getComponent('ErrorPagesContainer')} />
        {/* DO NOT CHANGE ANYTHING BELOW THIS LINE */}
      </Route>

    </Route>
  </Route>
);

// Run the application
VertiscaleUI.run();
