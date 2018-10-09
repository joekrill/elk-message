import RealTimeClockDataWrite from './RealTimeClockDataWrite';
import MonthOfYear from '../../enums/MonthOfYear';
import DayOfWeek from '../../enums/DayOfWeek';

describe('RealTimeClockDataWrite', () => {
  let realTimeClockDataWrite: RealTimeClockDataWrite;

  beforeEach(() => {
    realTimeClockDataWrite = new RealTimeClockDataWrite(
      2005,
      MonthOfYear.May,
      11,
      DayOfWeek.Sunday,
      23,
      59,
      30
    );
  });

  it('generates the expected raw message', () => {
    expect(realTimeClockDataWrite.raw).toBe('13rw305923111050500C0\r\n');
  });
});
