import { every } from 'lodash';

export default class Validator {
  constructor(input) {
    this._input = input;
    this._validators = [];
  }

  validate() {
    return every(this._validators, (validator) => (validator(this._input)));
  }

  static matches(input, expression, modifiers = 'i') {
    const REGEX = new RegExp(expression, modifiers);
    return REGEX.test(input);
  }

  static isUUID(input) {
    const PATTERN = /^[0-9a-f]{8}-[0-9a-f]{4}-[1-4][0-9a-f]{3}-[0-9a-f]{4}-[0-9a-f]{12}$/;
    return Validator.matches(input, PATTERN, 'i');
  }

  uuid() {
    this._validators.push((input) => (Validator.isUUID(input)));
    return this;
  }

}
