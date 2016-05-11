import { Module } from 'reductor';
import WorkflowsContainer from './WorkflowsContainer.jsx';
import WorkflowContainer from './WorkflowContainer.jsx';
import { InitWorkflows, InitWorkflow } from './actions/';

const WorkflowsModule = new Module();

WorkflowsModule
  .name('Workflows')
  .version('1.0.0');

WorkflowsModule
  .setInitialState({
    initialized: false,
    initializedWorkflow: false,
    workflows: [],
    workflow: [],
  });

WorkflowsModule
  .component('WorkflowsContainer', WorkflowsContainer)
  .component('WorkflowContainer', WorkflowContainer);

WorkflowsModule
  .on(InitWorkflows.Action, InitWorkflows.Reducer, InitWorkflows.PayloadCreator)
  .on(InitWorkflow.Action, InitWorkflow.Reducer, InitWorkflow.PayloadCreator);

export default WorkflowsModule;
