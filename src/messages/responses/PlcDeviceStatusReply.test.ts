import PlcDeviceStatusReply from './PlcDeviceStatusReply';

describe('PlcDeviceStatusReply', () => {
  describe('parses', () => {
    const raw = '47PS001111111111111110000000000000000000000000000000000000000000000000053\r\n';
    let plcDeviceStatusReply: PlcDeviceStatusReply;

    beforeEach(() => {
      plcDeviceStatusReply = new PlcDeviceStatusReply(raw);
    });

    it('has the expected data', () => {
      expect(plcDeviceStatusReply.bank).toBe(0);
      expect(plcDeviceStatusReply.levels).toEqual([
        0,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0
      ]);
    });
  });
});
