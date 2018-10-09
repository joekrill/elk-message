import ThermostatDataRequest from './ThermostatDataRequest';

describe('ThermostatDataRequest', () => {
  let temperatureDataRequest: ThermostatDataRequest;

  beforeEach(() => {
    temperatureDataRequest = new ThermostatDataRequest(1);
  });

  it('generates the expected raw message', () => {
    expect(temperatureDataRequest.raw).toBe('08tr0100F1\r\n');
  });
});
