import SystemTroubleStatusRequest from './SystemTroubleStatusRequest';

describe('SystemTroubleStatusRequest', () => {
  const EXPECTED_RAW = '06ss0054\r\n';
  let systemTroubleStatusRequest: SystemTroubleStatusRequest;

  beforeEach(() => {
    systemTroubleStatusRequest = new SystemTroubleStatusRequest();
  });

  it('uses the "ss" command', () => {
    expect(systemTroubleStatusRequest.command).toBe('ss');
  });

  it('Generates the expected raw', () => {
    expect(systemTroubleStatusRequest.raw).toBe(EXPECTED_RAW);
  });
});
