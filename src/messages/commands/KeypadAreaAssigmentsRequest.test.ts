import KeypadAreaAssigmentsRequest from './KeypadAreaAssigmentsRequest';

describe('KeypadAreaAssigmentsRequest', () => {
  let keypadAreaAssigmentsRequest: KeypadAreaAssigmentsRequest;

  beforeEach(() => {
    keypadAreaAssigmentsRequest = new KeypadAreaAssigmentsRequest();
  });

  it('generates the expected raw message', () => {
    expect(keypadAreaAssigmentsRequest.raw).toBe('06ka006E\r\n');
  });
});
