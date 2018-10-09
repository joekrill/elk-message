import TemperatureReply from './TemperatureReply';
import TemperatureDeviceType from '../../enums/TemperatureDeviceType';

describe('TemperatureReply', () => {
  describe('parses', () => {
    describe('temperature probe 1 = 75', () => {
      const raw = '0CST001135005C\r\n';
      let temperatureReply: TemperatureReply;

      beforeEach(() => {
        temperatureReply = new TemperatureReply(raw);
      });

      it('has the expected time values', () => {
        expect(temperatureReply.deviceType).toBe(TemperatureDeviceType.TemperatureProbe);
        expect(temperatureReply.deviceNumber).toBe(1);
        expect(temperatureReply.temperature).toBe(75);
      });
    });

    describe('keypad 2 = 65', () => {
      const raw = '0CST1021050058\r\n';
      let temperatureReply: TemperatureReply;

      beforeEach(() => {
        temperatureReply = new TemperatureReply(raw);
      });

      it('has the expected time values', () => {
        expect(temperatureReply.deviceType).toBe(TemperatureDeviceType.Keypad);
        expect(temperatureReply.deviceNumber).toBe(2);
        expect(temperatureReply.temperature).toBe(65);
      });
    });

    describe('thermostat 1 = 72', () => {
      const raw = '0CST201072005A\r\n';
      let temperatureReply: TemperatureReply;

      beforeEach(() => {
        temperatureReply = new TemperatureReply(raw);
      });

      it('has the expected time values', () => {
        expect(temperatureReply.deviceType).toBe(TemperatureDeviceType.Thermostat);
        expect(temperatureReply.deviceNumber).toBe(1);
        expect(temperatureReply.temperature).toBe(72);
      });
    });
  });
});
