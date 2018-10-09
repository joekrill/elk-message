import AlarmMemoryUpdate from './AlarmMemoryUpdate';

describe('AlarmMemoryUpdate', () => {
  describe('parses', () => {
    const raw = '0EAM110000110019\r\n';
    let alarmMemoryUpdate: AlarmMemoryUpdate;

    beforeEach(() => {
      alarmMemoryUpdate = new AlarmMemoryUpdate(raw);
    });

    it('reports the expected values', () => {
      expect(alarmMemoryUpdate.isChecksumValid).toBe(true);
      expect(alarmMemoryUpdate.isPacketLengthValid).toBe(true);
      expect(alarmMemoryUpdate.isAlarmMemoryPresent(1)).toBe(true);
      expect(alarmMemoryUpdate.isAlarmMemoryPresent(2)).toBe(true);
      expect(alarmMemoryUpdate.isAlarmMemoryPresent(3)).toBe(false);
      expect(alarmMemoryUpdate.isAlarmMemoryPresent(4)).toBe(false);
      expect(alarmMemoryUpdate.isAlarmMemoryPresent(5)).toBe(false);
      expect(alarmMemoryUpdate.isAlarmMemoryPresent(6)).toBe(false);
      expect(alarmMemoryUpdate.isAlarmMemoryPresent(7)).toBe(true);
      expect(alarmMemoryUpdate.isAlarmMemoryPresent(8)).toBe(true);
    });
  });
});
