import ZoneBypassRequest from './ZoneBypassRequest';

describe('ZoneBypassRequest', () => {
  let zoneBypassRequest: ZoneBypassRequest;

  describe('toggle zone 5, area 1, code 3456', () => {
    beforeEach(() => {
      zoneBypassRequest = new ZoneBypassRequest('3456', 5, 1);
    });

    it('generates the expected raw message', () => {
      expect(zoneBypassRequest.raw).toBe('10zb0051003456006B\r\n');
    });
  });

  describe('toggle zone 5, code 3456', () => {
    beforeEach(() => {
      zoneBypassRequest = new ZoneBypassRequest('3456', 5);
    });

    it('generates the expected raw message', () => {
      expect(zoneBypassRequest.raw).toBe('10zb0050003456006C\r\n');
    });
  });
});
