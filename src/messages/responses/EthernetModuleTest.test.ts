import EthernetModuleTest from './EthernetModuleTest';
import DayOfWeek from '../../enums/DayOfWeek';
import MonthOfYear from '../../enums/MonthOfYear';

describe('EthernetModuleTest', () => {
  describe('parses', () => {
    const raw = '16XK2636115020605110006F\r\n';
    let ethernetModuleTest: EthernetModuleTest;

    beforeEach(() => {
      ethernetModuleTest = new EthernetModuleTest(raw);
    });

    it('has the expected time values', () => {
      expect(ethernetModuleTest.seconds).toBe(26);
      expect(ethernetModuleTest.minutes).toBe(36);
      expect(ethernetModuleTest.hour).toBe(11);
      expect(ethernetModuleTest.dayOfWeek).toBe(DayOfWeek.Thursday);
      expect(ethernetModuleTest.dayOfMonth).toBe(2);
      expect(ethernetModuleTest.monthOfYear).toBe(MonthOfYear.June);
      expect(ethernetModuleTest.year).toBe(2005);
      expect(ethernetModuleTest.isDst).toBe(true);
      expect(ethernetModuleTest.is12hourClockMode).toBe(true);
      expect(ethernetModuleTest.isDateModeDayFirst).toBe(false);
    });

    it('provides a valid javascript date as UTC', () => {
      expect(ethernetModuleTest.date.toISOString()).toBe('2005-06-02T11:36:26.000Z');
    });
  });
});
