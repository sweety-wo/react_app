import { Module } from 'reductor';
import ErrorPagesContainer from './ErrorPagesContainer.jsx';

const ErrorPagesModule = new Module();

ErrorPagesModule
  .name('ErrorPages')
  .version('1.0.0')
  .initialState({ })
  .component('ErrorPagesContainer', ErrorPagesContainer);

export default ErrorPagesModule;
