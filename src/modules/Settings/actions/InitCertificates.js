import { ApiClient } from 'core/api';

const API = new ApiClient();
const InitCertificates = {};

// Action
InitCertificates.Action = 'INIT_CERTIFICATES';

// Reducer
InitCertificates.Reducer = (state, action) => ({
  ...state,
  initialized: true,
  certificates: action.payload,
});

// Payload Creators
InitCertificates.PayloadCreator = () => (
  API.request('Certificate', 'listCertificates', { })
);

export default InitCertificates;
