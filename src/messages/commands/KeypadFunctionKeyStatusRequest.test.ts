import KeypadFunctionKeyStatusRequest from './KeypadFunctionKeyStatusRequest';

describe('KeypadFunctionKeyStatusRequest', () => {
  let keypadFunctionKeyStatusRequest: KeypadFunctionKeyStatusRequest;

  describe('for keypad 1', () => {
    beforeEach(() => {
      keypadFunctionKeyStatusRequest = new KeypadFunctionKeyStatusRequest(1);
    });

    it('generates the expected raw message', () => {
      expect(keypadFunctionKeyStatusRequest.raw).toBe('08kc010009\r\n');
    });
  });

  describe('for keypad 8', () => {
    beforeEach(() => {
      keypadFunctionKeyStatusRequest = new KeypadFunctionKeyStatusRequest(8);
    });

    it('generates the expected raw message', () => {
      expect(keypadFunctionKeyStatusRequest.raw).toBe('08kc080002\r\n');
    });
  });
});
