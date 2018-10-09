import ThermostatSet from './ThermostatSet';
import ThermostatSetType from '../../enums/ThermostatSetType';

describe('ThermostatSet', () => {
  let thermostatSet: ThermostatSet;

  beforeEach(() => {
    thermostatSet = new ThermostatSet(1, 70, ThermostatSetType.CoolSetPoint);
  });

  it('generates the expected raw message', () => {
    expect(thermostatSet.raw).toBe('0Bts01704004B\r\n');
  });
});
