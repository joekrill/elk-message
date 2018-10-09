import VersionNumberRequest from './VersionNumberRequest';

describe('VersionNumberRequest', () => {
  let versionNumberRequest: VersionNumberRequest;

  beforeEach(() => {
    versionNumberRequest = new VersionNumberRequest();
  });

  it('generates the expected raw message', () => {
    expect(versionNumberRequest.raw).toBe('06vn0056\r\n');
  });
});
