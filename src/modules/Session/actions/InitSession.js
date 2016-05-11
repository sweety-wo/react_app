import { ApiClient } from 'core/api';

const API = new ApiClient();

const InitSession = {};

InitSession.Action = 'INIT_SESSION';

InitSession.Reducer = {
  next: (state, action) => {
    const initialized = true;
    return {
      ...state,
      initialized,
      loginProfile: { ...action.payload },
    };
  },
  throw: (state, action) => (
    {
      ...state,
      error: action.payload,
    }
  ),
};

InitSession.PayloadCreator = (locator) => (
  API.request(
    'System',
    'loginProfile',
    {
      workspaceLocator: locator,
    }
  )
);

export default InitSession;
