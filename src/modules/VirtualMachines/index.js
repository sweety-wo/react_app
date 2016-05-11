import { Module } from 'reductor';
import VirtualMachinesContainer from './VirtualMachinesContainer.jsx';
import { InitVirtualMachines } from './actions/';
import { InitClouds } from '../Clouds/actions/';

const VirtualMachinesModule = new Module();

VirtualMachinesModule
  .name('Virtual Machines')
  .version('1.0.0');

const InitialState = {
  initialized: false,
  vmData: [],
  clouds: [],
};

VirtualMachinesModule
  .initialState(InitialState)
  .on(InitVirtualMachines.Action, InitVirtualMachines.Reducer, InitVirtualMachines.PayloadCreator)
  .on(InitClouds.Action, InitClouds.Reducer, InitClouds.PayloadCreator)
  .component('VirtualMachinesContainer', VirtualMachinesContainer);

export default VirtualMachinesModule;
