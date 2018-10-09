import TemperatureRequest from './TemperatureRequest';
import TemperatureDeviceType from '../../enums/TemperatureDeviceType';

describe('TemperatureRequest', () => {
  let temperatureRequest: TemperatureRequest;

  describe('for temperature probe 1', () => {
    beforeEach(() => {
      temperatureRequest = new TemperatureRequest(TemperatureDeviceType.TemperatureProbe, 1);
    });

    it('generates the expected raw message', () => {
      expect(temperatureRequest.raw).toBe('09st00100BF\r\n');
    });
  });

  describe('for keypad 1', () => {
    beforeEach(() => {
      temperatureRequest = new TemperatureRequest(TemperatureDeviceType.Keypad, 1);
    });

    it('generates the expected raw message', () => {
      expect(temperatureRequest.raw).toBe('09st10100BE\r\n');
    });
  });

  describe('for thermostat 4', () => {
    beforeEach(() => {
      temperatureRequest = new TemperatureRequest(TemperatureDeviceType.Thermostat, 4);
    });

    it('generates the expected raw message', () => {
      expect(temperatureRequest.raw).toBe('09st20400BA\r\n');
    });
  });
});
