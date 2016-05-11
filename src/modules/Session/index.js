import { Module } from 'reductor';

import {
  InitSession,
  UserLogin,
  UserLogout,
} from './actions/';

import SessionContainer from './SessionContainer.jsx';
import SecureContainer from './SecureContainer.jsx';
import LoginContainer from './LoginContainer.jsx';
import LandingPage from './LandingPage.jsx';

const SessionModule = new Module();

SessionModule
  .name('Session')
  .version('1.0.0');

// Initial State
const InitSessionState = {
  __persist: true,
  initialized: false,
  error: null,
  loginProfile: {},
  sessionId: null,
  accessLevel: null,
  user: {
    id: null,
    name: null,
    logo: null,
    accessLevel: null,
  },
  permissions: [],
};

SessionModule.setInitialState(InitSessionState);

SessionModule
  .component('SessionContainer', SessionContainer)
  .component('SecureContainer', SecureContainer)
  .component('LoginContainer', LoginContainer)
  .component('LandingPage', LandingPage, null, false);

SessionModule
  .on(InitSession.Action, InitSession.Reducer, InitSession.PayloadCreator)
  .on(UserLogin.Action, UserLogin.Reducer, UserLogin.PayloadCreator)
  .on(UserLogout.Action, UserLogout.Reducer, UserLogout.PayloadCreator);

export default SessionModule;
