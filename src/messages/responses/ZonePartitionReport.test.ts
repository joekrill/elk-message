import ZonePartitionReport from './ZonePartitionReport';

describe('ZonePartitionReport', () => {
  describe('parses', () => {
    const raw =
      'D6ZP20800000900000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000010068\r\n';
    let zonePartitionReport: ZonePartitionReport;

    beforeEach(() => {
      zonePartitionReport = new ZonePartitionReport(raw);
    });

    it('zone 1 is assigned to area 2', () => {
      expect(zonePartitionReport.getZoneArea(1)).toBe(2);
    });

    it('zone 2 is assigned to no area', () => {
      expect(zonePartitionReport.getZoneArea(2)).toBe(0);
    });

    it('zone 3 is assigned to area 8', () => {
      expect(zonePartitionReport.getZoneArea(3)).toBe(8);
    });

    it('zone 208 is assigned to area 1', () => {
      expect(zonePartitionReport.getZoneArea(208)).toBe(1);
    });
  });
});
