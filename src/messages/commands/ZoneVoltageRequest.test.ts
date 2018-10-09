import ZoneVoltageRequest from './ZoneVoltageRequest';

describe('ZoneVoltageRequest', () => {
  let zoneVoltageRequest: ZoneVoltageRequest;

  describe('violate zone 123', () => {
    beforeEach(() => {
      zoneVoltageRequest = new ZoneVoltageRequest(123);
    });

    it('generates the expected raw message', () => {
      expect(zoneVoltageRequest.raw).toBe('09zv12300B1\r\n');
    });
  });
});
