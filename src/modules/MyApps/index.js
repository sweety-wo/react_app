import { Module } from 'reductor';
import MyAppsContainer from './MyAppsContainer.jsx';
import { InitMyApps } from './actions/';
import { UpdateFavorite } from './actions';

const MyAppsModule = new Module();

MyAppsModule
  .name('MyApps')
  .version('1.0.0');

// Initial State
const InitialState = {
  initialized: false,
  applications: [],
};

const MyAppsSelector = (state, ownProps) => ({
  userId: state['module/session'].user.id,
  params: ownProps.params,
  ...state['module/my_apps'],
});

MyAppsModule
  .initialState(InitialState)
  .on(InitMyApps.Action, InitMyApps.Reducer, InitMyApps.PayloadCreator)
  .on(UpdateFavorite.Action, UpdateFavorite.Reducer, UpdateFavorite.PayloadCreator)
  .component('MyAppsContainer', MyAppsContainer, MyAppsSelector);

export default MyAppsModule;
