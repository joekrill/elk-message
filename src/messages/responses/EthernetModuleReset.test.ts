import EthernetModuleReset from './EthernetModuleReset';

describe('EthernetModuleReset', () => {
  let ethernetModuleReset: EthernetModuleReset;
  describe('parses', () => {
    describe('reset the ethernet module', () => {
      const raw = '07RE00072\r\n';

      beforeEach(() => {
        ethernetModuleReset = new EthernetModuleReset(raw);
      });

      it('has the expected time values', () => {
        expect(ethernetModuleReset.isIpAddressReset).toBe(false);
      });
    });

    describe('reset the ethernet module and IP address', () => {
      const raw = '07RE10071\r\n';

      beforeEach(() => {
        ethernetModuleReset = new EthernetModuleReset(raw);
      });

      it('has the expected time values', () => {
        expect(ethernetModuleReset.isIpAddressReset).toBe(true);
      });
    });
  });
});
