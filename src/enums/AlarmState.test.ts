import AlarmState from './AlarmState';

describe('AlarmState', () => {
  describe('isActiveAlarm', () => {
    it('is false for None', () => {
      expect(AlarmState.isActiveAlarm(AlarmState.None)).toBe(false);
    });

    it('is false for EntranceDelayActive', () => {
      expect(AlarmState.isActiveAlarm(AlarmState.EntranceDelayActive)).toBe(false);
    });

    it('is false for AlarmAbortDelayActive', () => {
      expect(AlarmState.isActiveAlarm(AlarmState.AlarmAbortDelayActive)).toBe(false);
    });

    it('is true for None', () => {
      expect(AlarmState.isActiveAlarm(AlarmState.FireAlarm)).toBe(true);
    });

    it('is true for None', () => {
      expect(AlarmState.isActiveAlarm(AlarmState.VerifyFire)).toBe(true);
    });
  });
});
