import KeypadKeyChange from './KeypadKeyChange';
import KeypadKey from '../../enums/KeypadKey';
import BeepAndChimeMode from '../../enums/BeepAndChimeMode';
import IlluminationStatus from '../../enums/IlluminationStatus';

describe('KeypadKeyChange', () => {
  describe('parses', () => {
    const raw = '19KC01112010000200000000010\r\n';
    let keypadKeyChange: KeypadKeyChange;

    beforeEach(() => {
      keypadKeyChange = new KeypadKeyChange(raw);
    });

    it('has the expected data', () => {
      expect(keypadKeyChange.keypadNumber).toBe(1);
      expect(keypadKeyChange.keyPressed).toBe(KeypadKey.Star);
      expect(keypadKeyChange.getFunctionKeyIllumination(1)).toBe(IlluminationStatus.Blinking);
      expect(keypadKeyChange.getFunctionKeyIllumination(2)).toBe(IlluminationStatus.Off);
      expect(keypadKeyChange.getFunctionKeyIllumination(3)).toBe(IlluminationStatus.On);
      expect(keypadKeyChange.getFunctionKeyIllumination(4)).toBe(IlluminationStatus.Off);
      expect(keypadKeyChange.getFunctionKeyIllumination(5)).toBe(IlluminationStatus.Off);
      expect(keypadKeyChange.getFunctionKeyIllumination(6)).toBe(IlluminationStatus.Off);
      expect(keypadKeyChange.isCodeRequiredToBypass).toBe(false);
      expect(keypadKeyChange.getBeepAndChimeMode(1)).toBe(BeepAndChimeMode.Constant);
    });
  });
});
