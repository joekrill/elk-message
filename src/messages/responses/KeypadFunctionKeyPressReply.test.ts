import KeypadFunctionKeyPressReply from './KeypadFunctionKeyPressReply';
import FunctionKey from '../../enums/FunctionKey';
import ChimeMode from '../../enums/ChimeMode';

describe('KeypadFunctionKeyPressReply', () => {
  describe('parses', () => {
    describe('Chime key pressed', () => {
      const raw = '11KF01C200000000087\r\n';
      let keypadFunctionKeyPressReply: KeypadFunctionKeyPressReply;

      beforeEach(() => {
        keypadFunctionKeyPressReply = new KeypadFunctionKeyPressReply(raw);
      });

      it('reports the expected values', () => {
        expect(keypadFunctionKeyPressReply.keypadNumber).toBe(1);
        expect(keypadFunctionKeyPressReply.functionKey).toBe(FunctionKey.Chime);
        expect(keypadFunctionKeyPressReply.getChimeMode(1)).toBe(ChimeMode.Voice);
        expect(keypadFunctionKeyPressReply.getChimeMode(2)).toBe(ChimeMode.Off);
        expect(keypadFunctionKeyPressReply.getChimeMode(3)).toBe(ChimeMode.Off);
        expect(keypadFunctionKeyPressReply.getChimeMode(4)).toBe(ChimeMode.Off);
        expect(keypadFunctionKeyPressReply.getChimeMode(5)).toBe(ChimeMode.Off);
        expect(keypadFunctionKeyPressReply.getChimeMode(6)).toBe(ChimeMode.Off);
        expect(keypadFunctionKeyPressReply.getChimeMode(7)).toBe(ChimeMode.Off);
        expect(keypadFunctionKeyPressReply.getChimeMode(8)).toBe(ChimeMode.Off);
      });
    });
  });
});
