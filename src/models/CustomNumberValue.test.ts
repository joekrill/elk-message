import CustomNumberValue from './CustomNumberValue';
import CustomValueFormat from '../enums/CustomValueFormat';

describe('CustomValue', () => {
  let customNumberValue: CustomNumberValue;

  describe('decode', () => {
    describe('Number format', () => {
      beforeEach(() => {
        customNumberValue = CustomNumberValue.decode('01234', CustomValueFormat.Number);
      });

      it('decodes Number format correctly', () => {
        expect(customNumberValue.value).toBe(1234);
        expect(customNumberValue.format).toBe(CustomValueFormat.Number);
      });
    });

    describe('Timer format', () => {
      beforeEach(() => {
        customNumberValue = CustomNumberValue.decode('00300', CustomValueFormat.Timer);
      });

      it('decodes Number format correctly', () => {
        expect(customNumberValue.value).toBe(300);
        expect(customNumberValue.format).toBe(CustomValueFormat.Timer);
      });
    });

    describe('TimeOfDay format', () => {
      it('throws an error', () => {
        expect(() => CustomNumberValue.decode('01234', CustomValueFormat.TimeOfDay)).toThrowError();
      });
    });
  });

  describe('instance', () => {
    describe('when only given a number', () => {
      beforeEach(() => {
        customNumberValue = new CustomNumberValue(1234);
      });

      it('sets format = CustomValueFormat.Number by default', () => {
        expect(customNumberValue.format).toBe(CustomValueFormat.Number);
      });
    });

    describe('Number format', () => {
      beforeEach(() => {
        customNumberValue = new CustomNumberValue(1234, CustomValueFormat.Number);
      });

      it('has the expected properties', () => {
        expect(customNumberValue.value).toBe(1234);
        expect(customNumberValue.format).toBe(CustomValueFormat.Number);
      });

      it('encodes correctly', () => {
        expect(customNumberValue.encode()).toBe('01234');
      });
    });

    describe('Timer format', () => {
      beforeEach(() => {
        customNumberValue = new CustomNumberValue(65432, CustomValueFormat.Timer);
      });

      it('has the expected properties', () => {
        expect(customNumberValue.value).toBe(65432);
        expect(customNumberValue.format).toBe(CustomValueFormat.Timer);
      });

      it('encodes correctly', () => {
        expect(customNumberValue.encode()).toBe('65432');
      });
    });
  });

  // describe('time of day', () => {
  //   beforeEach(() => {
  //     customValue = new CustomValue(3, 5416, CustomValueFormat.TimeOfDay);
  //   });

  //   it('decodes the time of day', () => {
  //     expect(customValue.hour).toBe(21);
  //     expect(customValue.minutes).toBe(40);
  //     expect(customValue.isTimeOfDay).toBe(true);
  //   });
  // });
});
