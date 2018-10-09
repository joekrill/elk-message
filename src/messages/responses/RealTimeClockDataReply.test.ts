import RealTimeClockDataReply from './RealTimeClockDataReply';
import DayOfWeek from '../../enums/DayOfWeek';
import MonthOfYear from '../../enums/MonthOfYear';

describe('RealTimeClockDataReply', () => {
  describe('parses', () => {
    const raw = '16RR0059107251205110006E\r\n';
    let realTimeClockDataReply: RealTimeClockDataReply;

    beforeEach(() => {
      realTimeClockDataReply = new RealTimeClockDataReply(raw);
    });

    it('has the expected time values', () => {
      expect(realTimeClockDataReply.seconds).toBe(0);
      expect(realTimeClockDataReply.minutes).toBe(59);
      expect(realTimeClockDataReply.hour).toBe(10);
      expect(realTimeClockDataReply.dayOfWeek).toBe(DayOfWeek.Saturday);
      expect(realTimeClockDataReply.dayOfMonth).toBe(25);
      expect(realTimeClockDataReply.monthOfYear).toBe(MonthOfYear.December);
      expect(realTimeClockDataReply.year).toBe(2005);
      expect(realTimeClockDataReply.isDst).toBe(true);
      expect(realTimeClockDataReply.is12hourClockMode).toBe(true);
      expect(realTimeClockDataReply.isDateModeDayFirst).toBe(false);
    });

    it('provides a valid javascript date as UTC', () => {
      expect(realTimeClockDataReply.date.toISOString()).toBe('2005-12-25T10:59:00.000Z');
    });
  });
});
