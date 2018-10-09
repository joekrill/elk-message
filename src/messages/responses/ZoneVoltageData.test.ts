import ZoneVoltageData from './ZoneVoltageData';

describe('ZoneVoltageData', () => {
  describe('parses', () => {
    const raw = '0CZV123072004E\r\n';

    let zoneVoltageData: ZoneVoltageData;

    beforeEach(() => {
      zoneVoltageData = new ZoneVoltageData(raw);
    });

    it('has the expected data', () => {
      expect(zoneVoltageData.zoneNumber).toBe(123);
      expect(zoneVoltageData.zoneVoltage).toBe(7.2);
    });
  });
});
