import ZoneBypassReply from './ZoneBypassReply';

describe('ZoneBypassReply', () => {
  describe('parses', () => {
    const raw = '0AZB123100CC\r\n';
    let zoneBypassReply: ZoneBypassReply;

    beforeEach(() => {
      zoneBypassReply = new ZoneBypassReply(raw);
    });

    it('reports the expected values', () => {
      expect(zoneBypassReply.zoneNumber).toBe(123);
      expect(zoneBypassReply.isBypassed).toBe(true);
    });
  });
});
