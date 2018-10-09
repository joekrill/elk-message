import ThermostatSetFan from './ThermostatSetFan';

describe('ThermostatSetFan', () => {
  let thermostatSetFan: ThermostatSetFan;

  describe('auto', () => {
    beforeEach(() => {
      thermostatSetFan = new ThermostatSetFan(4, false);
    });

    it('generates the expected raw message', () => {
      expect(thermostatSetFan.raw).toBe('0Bts040020051\r\n');
    });
  });

  describe('on', () => {
    beforeEach(() => {
      thermostatSetFan = new ThermostatSetFan(5, true);
    });

    it('generates the expected raw message', () => {
      expect(thermostatSetFan.raw).toBe('0Bts05012004F\r\n');
    });
  });
});
