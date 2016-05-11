import authWrapper from './authWrapper';

const checkAuth = authWrapper({
  selector: state => state['module/session'].sessionId,
  wrapperDisplayName: 'UserIsAuthenticated',
  predicate: sessionId => sessionId !== null,
});

export default checkAuth;
