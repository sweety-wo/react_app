import { Module } from 'reductor';
import HelpContainer from './HelpContainer.jsx';

const HelpModule = new Module();

HelpModule
  .name('Help')
  .version('1.0.0')
  .initialState({ })
  .component('HelpContainer', HelpContainer);

export default HelpModule;
