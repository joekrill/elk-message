import ThermostatSetMode from './ThermostatSetMode';
import ThermostatMode from '../../enums/ThermostatMode';

describe('ThermostatSetMode', () => {
  let thermostatSetMode: ThermostatSetMode;

  describe('off', () => {
    beforeEach(() => {
      thermostatSetMode = new ThermostatSetMode(3, ThermostatMode.Off);
    });

    it('generates the expected raw message', () => {
      expect(thermostatSetMode.raw).toBe('0Bts030000054\r\n');
    });
  });

  describe('heat', () => {
    beforeEach(() => {
      thermostatSetMode = new ThermostatSetMode(3, ThermostatMode.Heat);
    });

    it('generates the expected raw message', () => {
      expect(thermostatSetMode.raw).toBe('0Bts030100053\r\n');
    });
  });

  describe('cool', () => {
    beforeEach(() => {
      thermostatSetMode = new ThermostatSetMode(3, ThermostatMode.Cool);
    });

    it('generates the expected raw message', () => {
      expect(thermostatSetMode.raw).toBe('0Bts030200052\r\n');
    });
  });

  describe('auto', () => {
    beforeEach(() => {
      thermostatSetMode = new ThermostatSetMode(3, ThermostatMode.Auto);
    });

    it('generates the expected raw message', () => {
      expect(thermostatSetMode.raw).toBe('0Bts030300051\r\n');
    });
  });

  describe('emergency heat', () => {
    beforeEach(() => {
      thermostatSetMode = new ThermostatSetMode(3, ThermostatMode.EmergencyHeat);
    });

    it('generates the expected raw message', () => {
      expect(thermostatSetMode.raw).toBe('0Bts030400050\r\n');
    });
  });
});
