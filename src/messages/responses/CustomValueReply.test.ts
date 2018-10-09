import CustomValueReply from './CustomValueReply';
import CustomValueFormat from '../../enums/CustomValueFormat';
import CustomNumberValue from '../../models/CustomNumberValue';
import CustomTimeOfDayValue from '../../models/CustomTimeOfDayValue';

describe('CustomValueReply', () => {
  let customValueReply: CustomValueReply;

  describe('parses', () => {
    describe('single value', () => {
      describe('number', () => {
        const raw = '0ECR01001230000F\r\n';

        beforeEach(() => {
          customValueReply = new CustomValueReply(raw);
        });

        it('reports the expected values', () => {
          expect(customValueReply.values.length).toBe(1);
          expect(customValueReply.valueNumber).toBe(1);
          const value = customValueReply.getCustomValue();
          expect(value.format).toBe(CustomValueFormat.Number);
          expect(value).toBeInstanceOf(CustomNumberValue);
          expect((value as CustomNumberValue).value).toBe(123);
        });
      });

      describe('timer', () => {
        const raw = '0ECR020045610004\r\n';

        beforeEach(() => {
          customValueReply = new CustomValueReply(raw);
        });

        it('reports the expected values', () => {
          expect(customValueReply.values.length).toBe(1);
          expect(customValueReply.valueNumber).toBe(2);
          const value = customValueReply.getCustomValue();
          expect(value.format).toBe(CustomValueFormat.Timer);
          expect(value).toBeInstanceOf(CustomNumberValue);
          expect((value as CustomNumberValue).value).toBe(456);
        });
      });

      describe('time of day', () => {
        const raw = '0ECR010541620003\r\n';

        beforeEach(() => {
          customValueReply = new CustomValueReply(raw);
        });

        it('reports the expected values', () => {
          expect(customValueReply.values.length).toBe(1);
          expect(customValueReply.valueNumber).toBe(1);
          const value = customValueReply.getCustomValue();
          expect(value.format).toBe(CustomValueFormat.TimeOfDay);
          expect(value).toBeInstanceOf(CustomTimeOfDayValue);
          expect((value as CustomTimeOfDayValue).hour).toBe(21);
          expect((value as CustomTimeOfDayValue).minutes).toBe(40);
        });
      });
    });

    describe('multiple values', () => {
      const raw =
        '0ECR000012300045610541620000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000003\r\n';

      beforeEach(() => {
        customValueReply = new CustomValueReply(raw);
      });

      it('reports the expected values', () => {
        expect(customValueReply.values.length).toBe(20);

        const value1 = customValueReply.getCustomValue(1);
        expect(value1).toBeInstanceOf(CustomNumberValue);
        expect((value1 as CustomNumberValue).value).toBe(123);

        const value2 = customValueReply.getCustomValue(2);
        expect(value2.format).toBe(CustomValueFormat.Timer);
        expect(value2).toBeInstanceOf(CustomNumberValue);
        expect((value2 as CustomNumberValue).value).toBe(456);

        const value3 = customValueReply.getCustomValue(3);
        expect(value3.format).toBe(CustomValueFormat.TimeOfDay);
        expect(value3).toBeInstanceOf(CustomTimeOfDayValue);
        expect((value3 as CustomTimeOfDayValue).hour).toBe(21);
        expect((value3 as CustomTimeOfDayValue).minutes).toBe(40);
      });
    });
  });
});
