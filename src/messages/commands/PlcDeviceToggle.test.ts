import PlcDeviceToggle from './PlcDeviceToggle';

describe('PlcDeviceToggle', () => {
  const EXPECTED_RAW = '09ptA0100B1\r\n';
  let plcDeviceToggle: PlcDeviceToggle;

  beforeEach(() => {
    plcDeviceToggle = new PlcDeviceToggle('A', 1);
  });

  it('Generates the expected raw', () => {
    expect(plcDeviceToggle.raw).toBe(EXPECTED_RAW);
  });
});
