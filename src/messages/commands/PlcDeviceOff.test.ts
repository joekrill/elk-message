import PlcDeviceOff from './PlcDeviceOff';

describe('PlcDeviceOff', () => {
  const EXPECTED_RAW = '09pfA0100BF\r\n';
  let plcDeviceOff: PlcDeviceOff;

  beforeEach(() => {
    plcDeviceOff = new PlcDeviceOff('A', 1);
  });

  it('Generates the expected raw', () => {
    expect(plcDeviceOff.raw).toBe(EXPECTED_RAW);
  });
});
