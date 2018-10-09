import KeypadFunctionKeyPressRequest from './KeypadFunctionKeyPressRequest';
import FunctionKey from '../../enums/FunctionKey';

describe('KeypadFunctionKeyPressRequest', () => {
  let keypadFunctionKeyPress: KeypadFunctionKeyPressRequest;

  describe('keypad 1, function key 1', () => {
    beforeEach(() => {
      keypadFunctionKeyPress = new KeypadFunctionKeyPressRequest(1, FunctionKey.F1);
    });

    it('generates the expected raw message', () => {
      expect(keypadFunctionKeyPress.raw).toBe('09kf01100D4\r\n');
    });
  });

  describe('keypad 8, request satus only', () => {
    beforeEach(() => {
      keypadFunctionKeyPress = new KeypadFunctionKeyPressRequest(8);
    });

    it('generates the expected raw message', () => {
      expect(keypadFunctionKeyPress.raw).toBe('09kf08000CE\r\n');
    });
  });
});
