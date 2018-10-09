import Omnistat2Reply from './Omnistat2Reply';

describe('Omnistat2Reply', () => {
  describe('parses', () => {
    const raw = '2At200000000000000000000000000000000000000C7\r\n';
    let omnistat2Reply: Omnistat2Reply;

    beforeEach(() => {
      omnistat2Reply = new Omnistat2Reply(raw);
    });

    it('has the expected time values', () => {
      expect(omnistat2Reply.data).toBe('000000000000000000000000000000000000');
    });
  });
});
