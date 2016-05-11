import { Module } from 'reductor';
import ProfileContainer from './ProfileContainer.jsx';
import CalendarsContainer from './CalendarsContainer.jsx';
import CertificatesContainer from './CertificatesContainer.jsx';
import { InitCertificates, DeleteCertificate, CreateCertificate, InitCalendars,
  DeleteCalendar, CreateCalendar, UpdateCalendar, InitSelectedCalendar,
  FetchTimezones, FetchProfile, ProfileSaved } from './actions/';

const SettingsModule = new Module();

SettingsModule
  .name('Settings')
  .version('1.0.0');

// Initial State
const InitialState = {
  initializedTimezones: false,
  initializedProfile: false,
  timezones: [],
  spProfile: {},
  certificates: [],
  calendars: [],
  calendar: {},
};

// const SettingsSelector = (state, ownProps) => ({
//  spInfo: state['module/session'].loginProfile,
//  params: ownProps.params,
// });

SettingsModule
  .initialState(InitialState)
  .on(FetchTimezones.Action, FetchTimezones.Reducer, FetchTimezones.PayloadCreator)
  .on(FetchProfile.Action, FetchProfile.Reducer, FetchProfile.PayloadCreator)
  .on(ProfileSaved.Action, ProfileSaved.Reducer, ProfileSaved.PayloadCreator)
  .on(InitCertificates.Action, InitCertificates.Reducer, InitCertificates.PayloadCreator)
  .on(InitCalendars.Action, InitCalendars.Reducer, InitCalendars.PayloadCreator)
  .on(CreateCertificate.Action, CreateCertificate.Reducer, CreateCertificate.PayloadCreator)
  .on(CreateCalendar.Action, CreateCalendar.Reducer, CreateCalendar.PayloadCreator)
  .on(DeleteCalendar.Action, DeleteCalendar.Reducer, DeleteCalendar.PayloadCreator)
  .on(DeleteCertificate.Action, DeleteCertificate.Reducer, DeleteCertificate.PayloadCreator)
  .on(InitSelectedCalendar.Action, InitSelectedCalendar.Reducer, InitSelectedCalendar.PayloadCreator)
  .on(UpdateCalendar.Action, UpdateCalendar.Reducer, UpdateCalendar.PayloadCreator)
  .component('ProfileContainer', ProfileContainer)
  .component('CalendarsContainer', CalendarsContainer)
  .component('CertificatesContainer', CertificatesContainer);

export default SettingsModule;
