import ZoneTrigger from './ZoneTrigger';

describe('ZoneTrigger', () => {
  let zoneTrigger: ZoneTrigger;

  describe('violate zone 123', () => {
    beforeEach(() => {
      zoneTrigger = new ZoneTrigger(123);
    });

    it('generates the expected raw message', () => {
      expect(zoneTrigger.raw).toBe('09zt12300B3\r\n');
    });
  });
});
