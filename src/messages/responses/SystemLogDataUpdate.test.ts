import SystemLogDataUpdate from './SystemLogDataUpdate';
import DayOfWeek from '../../enums/DayOfWeek';

describe('SystemLogDataUpdate', () => {
  describe('parses', () => {
    const raw = '1CLD1193102119450607001505003F\r\n';
    let systemLogDataUpdate: SystemLogDataUpdate;

    beforeEach(() => {
      systemLogDataUpdate = new SystemLogDataUpdate(raw);
    });

    it('has the expected time values', () => {
      expect(systemLogDataUpdate.event).toBe(1193);
      expect(systemLogDataUpdate.eventNumberData).toBe(102);
      expect(systemLogDataUpdate.areaNumber).toBe(1);
      expect(systemLogDataUpdate.hour).toBe(19);
      expect(systemLogDataUpdate.minutes).toBe(45);
      expect(systemLogDataUpdate.month).toBe(6);
      expect(systemLogDataUpdate.day).toBe(7);
      expect(systemLogDataUpdate.dayOfWeek).toBe(DayOfWeek.Thursday);
      expect(systemLogDataUpdate.year).toBe(2005);
      expect(systemLogDataUpdate.logIndex).toBe(1);
    });
  });
});
