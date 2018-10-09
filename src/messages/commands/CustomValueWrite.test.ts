import CustomValueWrite from './CustomValueWrite';
import CustomNumberValue from '../../models/CustomNumberValue';
import CustomTimeOfDayValue from '../../models/CustomTimeOfDayValue';

describe('CustomValueWrite', () => {
  let customValueWrite: CustomValueWrite;

  describe('number', () => {
    const EXPECTED_RAW = '0Dcw050012300F7\r\n';

    beforeEach(() => {
      customValueWrite = new CustomValueWrite(5, new CustomNumberValue(123));
    });

    it('Generates the expected raw', () => {
      expect(customValueWrite.raw).toBe(EXPECTED_RAW);
    });
  });

  describe('time of day', () => {
    const EXPECTED_RAW = '0Dcw010541600F1\r\n';

    beforeEach(() => {
      customValueWrite = new CustomValueWrite(1, new CustomTimeOfDayValue(21, 40));
    });

    it('Generates the expected raw', () => {
      expect(customValueWrite.raw).toBe(EXPECTED_RAW);
    });
  });

  describe('invalid valueNumber', () => {
    expect(() => new CustomValueWrite(25, new CustomNumberValue(123))).toThrow(RangeError);
  });
});
