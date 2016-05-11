import { ApiClient } from 'core/api';

const API = new ApiClient();
const DeleteCertificate = {};

// Action
DeleteCertificate.Action = 'DELETE_CERTIFICATE';

// Reducer
DeleteCertificate.Reducer = (state) => ({
  ...state,
  initialized: false,
});

// Payload Creators
DeleteCertificate.PayloadCreator = (id) => (
  API.request('Certificate', 'deleteCertificate', { id })
);

export default DeleteCertificate;
