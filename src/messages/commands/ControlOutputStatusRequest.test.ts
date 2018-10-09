import ControlOutputStatusRequest from './ControlOutputStatusRequest';

describe('ControlOutputStatusRequest', () => {
  const EXPECTED_RAW = '06cs0064\r\n';
  let controlOutputStatusRequest: ControlOutputStatusRequest;

  beforeEach(() => {
    controlOutputStatusRequest = new ControlOutputStatusRequest();
  });

  it('Generates the expected raw', () => {
    expect(controlOutputStatusRequest.raw).toBe(EXPECTED_RAW);
  });
});
