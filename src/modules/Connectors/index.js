import { Module } from 'reductor';
import ConnectorsContainer from './ConnectorsContainer.jsx';
import SelectedConnectorContainer from './SelectedConnectorContainer.jsx';
import { InitConnectors, InitSelectedConnector, deleteConnector, createConnector } from './actions/';

const ConnectorsModule = new Module();

ConnectorsModule
  .name('Connectors')
  .version('1.0.0');

// Initial State
const InitialState = {
  initialized: false,
  connectors: [],
  connector: {},
};

ConnectorsModule
  .initialState(InitialState)
  .on(InitConnectors.Action, InitConnectors.Reducer, InitConnectors.PayloadCreator)
  .on(InitSelectedConnector.Action, InitSelectedConnector.Reducer, InitSelectedConnector.PayloadCreator)
  .on(deleteConnector.Action, deleteConnector.Reducer, deleteConnector.PayloadCreator)
  .on(createConnector.Action, createConnector.Reducer, createConnector.PayloadCreator)
  .component('ConnectorsContainer', ConnectorsContainer)
  .component('SelectedConnectorContainer', SelectedConnectorContainer);

export default ConnectorsModule;
