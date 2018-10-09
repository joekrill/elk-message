import PlcDeviceStatusRequest from './PlcDeviceStatusRequest';

describe('PlcDeviceStatusRequest', () => {
  const EXPECTED_RAW = '07ps00026\r\n';
  let plcDeviceStatusRequest: PlcDeviceStatusRequest;

  beforeEach(() => {
    plcDeviceStatusRequest = new PlcDeviceStatusRequest(0);
  });

  it('Generates the expected raw', () => {
    expect(plcDeviceStatusRequest.raw).toBe(EXPECTED_RAW);
  });
});
