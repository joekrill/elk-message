import CustomTimeOfDayValue from './CustomTimeOfDayValue';
import CustomValueFormat from '../enums/CustomValueFormat';

describe('CustomValue', () => {
  let customTimeOfDayValue: CustomTimeOfDayValue;

  describe('decode', () => {
    beforeEach(() => {
      customTimeOfDayValue = CustomTimeOfDayValue.decode('05416');
    });

    it('has the expected values', () => {
      expect(customTimeOfDayValue.hour).toBe(21);
      expect(customTimeOfDayValue.minutes).toBe(40);
      expect(customTimeOfDayValue.format).toBe(CustomValueFormat.TimeOfDay);
    });
  });

  describe('instance', () => {
    beforeEach(() => {
      customTimeOfDayValue = new CustomTimeOfDayValue(21, 40);
    });

    it('has the expected properties', () => {
      expect(customTimeOfDayValue.hour).toBe(21);
      expect(customTimeOfDayValue.minutes).toBe(40);
      expect(customTimeOfDayValue.format).toBe(CustomValueFormat.TimeOfDay);
    });

    it('encodes correctly', () => {
      expect(customTimeOfDayValue.encode()).toBe('05416');
    });
  });
});
