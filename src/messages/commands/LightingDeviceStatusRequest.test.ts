import LightingDeviceStatusRequest from './LightingDeviceStatusRequest';

describe('LightingDeviceStatusRequest', () => {
  let lightingDeviceStatusRequest: LightingDeviceStatusRequest;

  describe('for device 1', () => {
    beforeEach(() => {
      lightingDeviceStatusRequest = new LightingDeviceStatusRequest(1);
    });

    it('generates the expected raw message', () => {
      expect(lightingDeviceStatusRequest.raw).toBe('09ds00100CF\r\n');
    });
  });

  describe('for device 20', () => {
    beforeEach(() => {
      lightingDeviceStatusRequest = new LightingDeviceStatusRequest(20);
    });

    it('generates the expected raw message', () => {
      expect(lightingDeviceStatusRequest.raw).toBe('09ds02000CE\r\n');
    });
  });
});
