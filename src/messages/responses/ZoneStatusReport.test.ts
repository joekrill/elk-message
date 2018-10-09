import ZoneStatusReport from './ZoneStatusReport';
import ZoneLogicalState from '../../enums/ZoneLogicalState';
import ZonePhysicalState from '../../enums/ZonePhysicalState';

describe('ZoneStatusReport', () => {
  describe('parses', () => {
    const raw =
      'D6ZS20B000009000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000D0048\r\n';
    let zoneStatusReport: ZoneStatusReport;
    beforeEach(() => {
      zoneStatusReport = new ZoneStatusReport(raw);
    });

    it('zone 1 is normal EOL', () => {
      expect(zoneStatusReport.getZoneStatus(1).logicalState).toBe(ZoneLogicalState.Normal);
      expect(zoneStatusReport.getZoneStatus(1).physicalState).toBe(ZonePhysicalState.EOL);
    });

    it('zone 2 is normal unconfigured', () => {
      expect(zoneStatusReport.getZoneStatus(2).logicalState).toBe(ZoneLogicalState.Normal);
      expect(zoneStatusReport.getZoneStatus(2).physicalState).toBe(ZonePhysicalState.Unconfigured);
    });

    it('zone 3 is violated short', () => {
      expect(zoneStatusReport.getZoneStatus(3).logicalState).toBe(ZoneLogicalState.Violated);
      expect(zoneStatusReport.getZoneStatus(3).physicalState).toBe(ZonePhysicalState.Short);
    });

    it('zone 208 is bypassed open', () => {
      expect(zoneStatusReport.getZoneStatus(208).logicalState).toBe(ZoneLogicalState.Bypassed);
      expect(zoneStatusReport.getZoneStatus(208).physicalState).toBe(ZonePhysicalState.Open);
    });
  });
});
