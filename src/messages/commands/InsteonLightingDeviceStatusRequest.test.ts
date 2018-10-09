import InsteonLightingDeviceStatusRequest from './InsteonLightingDeviceStatusRequest';

describe('InsteonLightingDeviceStatusRequest', () => {
  let insteonLightingDeviceStatusRequest: InsteonLightingDeviceStatusRequest;

  describe('for device 1-8', () => {
    beforeEach(() => {
      insteonLightingDeviceStatusRequest = new InsteonLightingDeviceStatusRequest(1, 8);
    });

    it('generates the expected raw message', () => {
      expect(insteonLightingDeviceStatusRequest.raw).toBe('0Air0018008B\r\n');
    });
  });
});
