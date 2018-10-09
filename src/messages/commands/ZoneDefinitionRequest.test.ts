import ZoneDefinitionRequest from './ZoneDefinitionRequest';

describe('ZoneDefinitionRequest', () => {
  let zoneDefinitionRequest: ZoneDefinitionRequest;

  beforeEach(() => {
    zoneDefinitionRequest = new ZoneDefinitionRequest();
  });

  it('generates the expected raw message', () => {
    expect(zoneDefinitionRequest.raw).toBe('06zd005C\r\n');
  });
});
