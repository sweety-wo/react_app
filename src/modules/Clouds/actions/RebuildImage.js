import { ApiClient } from 'core/api';

const API = new ApiClient();
const RebuildImage = {};

// Action
RebuildImage.Action = 'REBUILD_IMAGE';

// Reducer
RebuildImage.Reducer = (state) => ({
  ...state,
  initialized: true,
});

// Payload Creators
RebuildImage.PayloadCreator = (clId, id) => (
  API.request('GoldImage', 'refreshGoldImage', { cloudId: clId, id })
);

export default RebuildImage;
