import ZonePartitionRequest from './ZonePartitionRequest';

describe('ZonePartitionRequest', () => {
  let zonePartitionRequest: ZonePartitionRequest;

  beforeEach(() => {
    zonePartitionRequest = new ZonePartitionRequest();
  });

  it('generates the expected raw message', () => {
    expect(zonePartitionRequest.raw).toBe('06zp0050\r\n');
  });
});
