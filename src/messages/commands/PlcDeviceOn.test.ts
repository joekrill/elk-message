import PlcDeviceOn from './PlcDeviceOn';

describe('PlcDeviceOn', () => {
  const EXPECTED_RAW = '09pnA0100B7\r\n';
  let plcDeviceOn: PlcDeviceOn;

  beforeEach(() => {
    plcDeviceOn = new PlcDeviceOn('A', 1);
  });

  it('Generates the expected raw', () => {
    expect(plcDeviceOn.raw).toBe(EXPECTED_RAW);
  });
});
