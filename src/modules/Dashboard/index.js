import { Module } from 'reductor';
import DashboardContainer from './DashboardContainer.jsx';

const DashboardModule = new Module();

DashboardModule
  .name('Dashboard')
  .version('1.0.0')
  .initialState({ testEvents: [], subscriptions: [] })
  .component('DashboardContainer', DashboardContainer);

export default DashboardModule;
