import TemperatureDataRequest from './TemperatureDataRequest';

describe('TemperatureDataRequest', () => {
  let temperatureDataRequest: TemperatureDataRequest;

  beforeEach(() => {
    temperatureDataRequest = new TemperatureDataRequest();
  });

  it('generates the expected raw message', () => {
    expect(temperatureDataRequest.raw).toBe('06lw0057\r\n');
  });
});
