import { Module } from 'reductor';
import SystemHealthContainer from './SystemHealthContainer.jsx';

const SystemHealthModule = new Module();

SystemHealthModule
  .name('SystemHealth')
  .version('1.0.0')
  .initialState({ })
  .component('SystemHealthContainer', SystemHealthContainer);

export default SystemHealthModule;
