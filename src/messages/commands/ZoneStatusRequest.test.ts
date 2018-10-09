import ZoneStatusRequest from './ZoneStatusRequest';

describe('ZoneStatusRequest', () => {
  let zoneStatusRequest: ZoneStatusRequest;

  beforeEach(() => {
    zoneStatusRequest = new ZoneStatusRequest();
  });

  it('generates the expected raw message', () => {
    expect(zoneStatusRequest.raw).toBe('06zs004D\r\n');
  });
});
