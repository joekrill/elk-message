import ThermostatData from './ThermostatData';
import ThermostatMode from '../../enums/ThermostatMode';

describe('ThermostatData', () => {
  let thermostatData: ThermostatData;

  describe('parses', () => {
    describe('example 1', () => {
      const raw = '13TR01200726875000000\r\n';

      beforeEach(() => {
        thermostatData = new ThermostatData(raw);
      });

      it('has the expected time values', () => {
        expect(thermostatData.thermostatNumber).toBe(1);
        expect(thermostatData.thermostatMode).toBe(ThermostatMode.Cool);
        expect(thermostatData.thermostatHold).toBe(false);
        expect(thermostatData.thermostatFanOn).toBe(false);
        expect(thermostatData.temperature).toBe(72);
        expect(thermostatData.heatSetPoint).toBe(68);
        expect(thermostatData.coolSetPoint).toBe(75);
        expect(thermostatData.humidity).toBeUndefined();
      });
    });

    describe('example 2', () => {
      const raw = '13TR01200000000000000\r\n';

      beforeEach(() => {
        thermostatData = new ThermostatData(raw);
      });

      it('has the expected time values', () => {
        expect(thermostatData.thermostatNumber).toBe(1);
        expect(thermostatData.thermostatMode).toBe(ThermostatMode.Cool);
        expect(thermostatData.thermostatHold).toBe(false);
        expect(thermostatData.thermostatFanOn).toBe(false);
        expect(thermostatData.temperature).toBeUndefined();
        expect(thermostatData.heatSetPoint).toBeUndefined();
        expect(thermostatData.coolSetPoint).toBeUndefined();
        expect(thermostatData.humidity).toBeUndefined();
      });
    });
  });
});
