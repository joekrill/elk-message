import RealTimeClockDataRequest from './RealTimeClockDataRequest';

describe('RealTimeClockDataRequest', () => {
  let realTimeClockDataRequest: RealTimeClockDataRequest;

  beforeEach(() => {
    realTimeClockDataRequest = new RealTimeClockDataRequest();
  });

  it('generates the expected raw message', () => {
    expect(realTimeClockDataRequest.raw).toBe('06rr0056\r\n');
  });
});
