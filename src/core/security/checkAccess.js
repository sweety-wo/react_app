/* eslint-disable new-cap */
import authWrapper from './authWrapper';

const checkAccess = (accessLevel) => authWrapper({
  selector: state => state['session/module'].accessLevel,
  wrapperDisplayName: 'UserIsAuthorized',
  predicate: level => level === accessLevel,
});

export default checkAccess;
