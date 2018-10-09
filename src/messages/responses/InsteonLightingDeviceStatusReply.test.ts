import InsteonLightingDeviceStatusReply from './InsteonLightingDeviceStatusReply';

describe('InsteonLightingDeviceStatusReply', () => {
  describe('parses', () => {
    const raw = '22IR0014123456ABCDEF987654A1B2C3006F\r\n';
    let insteonLightingDeviceStatusReply: InsteonLightingDeviceStatusReply;

    beforeEach(() => {
      insteonLightingDeviceStatusReply = new InsteonLightingDeviceStatusReply(raw);
    });

    it('has the expected data', () => {
      expect(insteonLightingDeviceStatusReply.startingDeviceNumber).toBe(1);
      expect(insteonLightingDeviceStatusReply.endingDeviceNumber).toBe(4);
      expect(insteonLightingDeviceStatusReply.deviceIds).toEqual([
        '123456',
        'ABCDEF',
        '987654',
        'A1B2C3'
      ]);
    });
  });
});
