import { ApiClient } from 'core/api';

const API = new ApiClient();
const CreateCertificate = {};

// Action
CreateCertificate.Action = 'CREATE_CERTIFICATE';

// Reducer
CreateCertificate.Reducer = (state, action) => ({
  ...state,
  initialized: true,
  certificate: action.payload,
  certificates: [...state.certificates, action.payload],
});

// Payload Creators
CreateCertificate.PayloadCreator = () => (
  API.request('Certificate', 'createCertificate', { })
);

export default CreateCertificate;
