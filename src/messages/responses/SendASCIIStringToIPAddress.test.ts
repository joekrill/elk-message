import SendASCIIStringToIPAddress from './SendASCIIStringToIPAddress';

describe('SendASCIIStringToIPAddress', () => {
  describe('parses', () => {
    const raw = '00AP4Sprinkler 1 ON^M^J0060\r\n';
    let sendASCIIStringToIPAddress: SendASCIIStringToIPAddress;

    beforeEach(() => {
      sendASCIIStringToIPAddress = new SendASCIIStringToIPAddress(raw);
    });

    it('has the expected time values', () => {
      expect(sendASCIIStringToIPAddress.ipAddressNumber).toBe(4);
      expect(sendASCIIStringToIPAddress.textData).toBe('Sprinkler 1 ON^M^J');
    });
  });
});
