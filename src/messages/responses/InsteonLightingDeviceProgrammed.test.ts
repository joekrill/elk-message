import InsteonLightingDeviceProgrammed from './InsteonLightingDeviceProgrammed';

describe('InsteonLightingDeviceProgrammed', () => {
  describe('parses', () => {
    const raw = '0AIP001400D1\r\n';
    let insteonLightingDeviceProgrammed: InsteonLightingDeviceProgrammed;

    beforeEach(() => {
      insteonLightingDeviceProgrammed = new InsteonLightingDeviceProgrammed(raw);
    });

    it('has the expected data', () => {
      expect(insteonLightingDeviceProgrammed.startingDeviceNumber).toBe(1);
      expect(insteonLightingDeviceProgrammed.endingDeviceNumber).toBe(4);
      expect(insteonLightingDeviceProgrammed.deviceCount).toBe(4);
    });
  });
});
