import AlarmByZoneReport from './AlarmByZoneReport';
import ZoneDefinition from '../../enums/ZoneDefinition';

describe('AlarmByZoneReport', () => {
  describe('parses', () => {
    let alarmByZoneReport: AlarmByZoneReport;

    describe('with alarm', () => {
      const raw =
        'D6AZ00000000900000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000082\r\n';

      beforeEach(() => {
        alarmByZoneReport = new AlarmByZoneReport(raw);
      });

      it('zones in alarm as [9]', () => {
        expect(alarmByZoneReport.zonesInAlarm).toEqual([9]);
        expect(alarmByZoneReport.hasAlarms).toBe(true);
      });

      it('zone 9 as BurglarBoxTamper', () => {
        expect(alarmByZoneReport.getZoneAlarm(9)).toBe(ZoneDefinition.BurglarBoxTamper);
      });

      it('zone 1 as Disabled', () => {
        expect(alarmByZoneReport.getZoneAlarm(1)).toBe(ZoneDefinition.Disabled);
      });
    });

    describe('no alarm', () => {
      const raw =
        'D6AZ00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000082\r\n';

      beforeEach(() => {
        alarmByZoneReport = new AlarmByZoneReport(raw);
      });

      it('report no alarms', () => {
        expect(alarmByZoneReport.zonesInAlarm).toEqual([]);
        expect(alarmByZoneReport.hasAlarms).toBe(false);
      });
    });
  });
});
