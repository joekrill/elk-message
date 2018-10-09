import ArmingStatusRequest from './ArmingStatusRequest';

describe('ArmingStatusRequest', () => {
  const EXPECTED_RAW = '06as0066\r\n';
  let armingStatusRequest: ArmingStatusRequest;

  beforeEach(() => {
    armingStatusRequest = new ArmingStatusRequest();
  });

  it('Generates the expected raw', () => {
    expect(armingStatusRequest.raw).toBe(EXPECTED_RAW);
  });
});
