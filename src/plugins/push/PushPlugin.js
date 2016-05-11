/* eslint-disable */
import { Plugin } from 'reductor';
import { PushClient } from 'core/api';
import { has } from 'lodash';

const SubscribeAction = 'SUBSCRIBE';
const CancelAction = 'CANCEL';
const SubscriptionCanceledAction = 'SUBSCRIPTION_CANCELED';

class PushPlugin extends Plugin {

  constructor() {
    super();

    this.setName('Push');
    this.setVersion('1.0.0');

    this.setInitialState({
      subscriptions: {},
    });

    this._pushClient = new PushClient();
  }

  subscribeReducer(state, action) {
    return ({
      ...state,
      [action.payload]: state[action.payload] + 1 || 1,
    });
  }

  subscribePayloadCreator(eventType) {
    return this._pushClient.subscribe(eventType).then(() => (
      eventType
    ));
  }

  cancelReducer(state, action) {
    const newState = {
      ...state,
      [action.payload]: state[action.payload] - 1,
    };
  }

  getActionTypes() {
    return this._pushClient.getEventTypes().then((eventTypes) => {
      eventTypes.forEach((eventType) => {
        this.addAction(eventType);
      });

      return this._actionTypes;
    });
  }

}

export default PushPlugin;
/* eslint-enable */
