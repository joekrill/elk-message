import ThermostatSetHold from './ThermostatSetHold';

describe('ThermostatSetHold', () => {
  let thermostatSetHold: ThermostatSetHold;

  describe('off', () => {
    beforeEach(() => {
      thermostatSetHold = new ThermostatSetHold(4, false);
    });

    it('generates the expected raw message', () => {
      expect(thermostatSetHold.raw).toBe('0Bts040010052\r\n');
    });
  });

  describe('on', () => {
    beforeEach(() => {
      thermostatSetHold = new ThermostatSetHold(5, true);
    });

    it('generates the expected raw message', () => {
      expect(thermostatSetHold.raw).toBe('0Bts050110050\r\n');
    });
  });
});
