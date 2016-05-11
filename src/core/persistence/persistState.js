import localforage from 'localforage';
import slicer from './slicer';
import { getLogger } from 'reductor';

const LS_STORAGE_KEY = 'vs_ui_data';
const LOG = getLogger('Persistence Enhancer');
const serialize = JSON.stringify;
const deserialize = JSON.parse;

function _createStore(createStore, reducer, initialState, enhancer) {
  const store = createStore(reducer, initialState, enhancer);

  store.subscribe(() => {
    const state = store.getState();
    const subset = slicer(state);

    localforage.setItem(LS_STORAGE_KEY, serialize(subset));
  });

  return store;
}

export default function persistState() {
  localforage.config({
    name: LS_STORAGE_KEY,
  });

  return (createStore) => (reducer, initialState, enhancer) => {
    localforage.getItem(LS_STORAGE_KEY)
      .then((data) => {
        const persistedState = deserialize(data);
        const finalInitialState = {
          ...initialState,
          persistedState,
        };

        return _createStore(createStore, reducer, finalInitialState, enhancer);
      })
      .catch((error) => {
        LOG.debug('Could not retrieve initial state from local storage.', error);
        return _createStore(createStore, reducer, initialState, enhancer);
      });
  };
}
