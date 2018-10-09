import ArmingStatusReport from './ArmingStatusReport';
import ArmingLevel from '../../enums/ArmingLevel';
import AlarmState from '../../enums/AlarmState';

describe('ArmingStatusReport', () => {
  let armingStatusReport: ArmingStatusReport;

  describe('Example 1', () => {
    const raw = '1EAS100000004000000030000000000E\r\n';

    beforeEach(() => {
      armingStatusReport = new ArmingStatusReport(raw);
    });

    it('reports area 1 as armed away', () => {
      expect(armingStatusReport.getAreaStatus(1).armingLevel).toBe(ArmingLevel.ArmedAway);
    });

    it('reports area 1 is in full fire alarm', () => {
      expect(armingStatusReport.getAreaStatus(1).alarmState).toBe(AlarmState.FireAlarm);
    });

    it('has no exit time', () => {
      expect(armingStatusReport.exitTime).toBeNull();
    });

    it('has no entrance', () => {
      expect(armingStatusReport.entranceTime).toBeNull();
    });
  });

  describe('Example 2', () => {
    const raw = '1EAS1000000031111111000000000902\r\n';

    beforeEach(() => {
      armingStatusReport = new ArmingStatusReport(raw);
    });

    it('has exit time of 9 seconds', () => {
      expect(armingStatusReport.exitTime).toBe(9);
    });

    it('has no entrance time', () => {
      expect(armingStatusReport.entranceTime).toBeNull();
    });
  });

  describe('Example 3', () => {
    const raw = '1EAS100000001111111110000000200A\r\n';

    beforeEach(() => {
      armingStatusReport = new ArmingStatusReport(raw);
    });

    it('has no exit time', () => {
      expect(armingStatusReport.exitTime).toBeNull();
    });

    it('has entrance time of 20 seconds', () => {
      expect(armingStatusReport.entranceTime).toBe(20);
    });
  });
});
