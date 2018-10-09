import LightingDeviceDataReply from './LightingDeviceDataReply';

describe('LightingDeviceDataReply', () => {
  let lightingDeviceDataReply: LightingDeviceDataReply;

  describe('parses', () => {
    describe('99% dimmed', () => {
      const raw = '0BDS001990094\r\n';

      beforeEach(() => {
        lightingDeviceDataReply = new LightingDeviceDataReply(raw);
      });

      it('has the expected data', () => {
        expect(lightingDeviceDataReply.lightingDeviceNumber).toBe(1);
        expect(lightingDeviceDataReply.lightingLevel).toBe(99);
      });
    });

    describe('fully on', () => {
      const raw = '0BDS0010100A5\r\n';

      beforeEach(() => {
        lightingDeviceDataReply = new LightingDeviceDataReply(raw);
      });

      it('has the expected data', () => {
        expect(lightingDeviceDataReply.lightingDeviceNumber).toBe(1);
        expect(lightingDeviceDataReply.lightingLevel).toBe(100);
      });
    });
    describe('off', () => {
      const raw = '0BDS0010000A6\r\n';

      beforeEach(() => {
        lightingDeviceDataReply = new LightingDeviceDataReply(raw);
      });

      it('has the expected data', () => {
        expect(lightingDeviceDataReply.lightingDeviceNumber).toBe(1);
        expect(lightingDeviceDataReply.lightingLevel).toBe(0);
      });
    });
  });
});
