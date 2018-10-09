import Omnistat2Request from './Omnistat2Request';

describe('Omnistat2Request', () => {
  let omnistat2Request: Omnistat2Request;

  describe('for temperature probe 1', () => {
    beforeEach(() => {
      omnistat2Request = new Omnistat2Request('');
    });

    it('generates the expected raw message', () => {
      expect(omnistat2Request.raw).toBe('2At200000000000000000000000000000000000000C7\r\n');
    });
  });
});
