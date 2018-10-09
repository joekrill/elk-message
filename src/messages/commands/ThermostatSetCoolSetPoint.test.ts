import ThermostatSetCoolSetPoint from './ThermostatSetCoolSetPoint';
import { ThermostatSetType } from '../../enums';

describe('ThermostatSetCoolSetPoint', () => {
  let thermostatSetCoolPoint: ThermostatSetCoolSetPoint;

  beforeEach(() => {
    thermostatSetCoolPoint = new ThermostatSetCoolSetPoint(4, 73);
  });

  it('generates the expected raw message', () => {
    expect(thermostatSetCoolPoint.raw).toBe('0Bts047340045\r\n');
  });

  it('sets CoolSetPoint values', () => {
    expect(thermostatSetCoolPoint.thermostatNumber).toBe(4);
    expect(thermostatSetCoolPoint.value).toBe(73);
    expect(thermostatSetCoolPoint.element).toBe(ThermostatSetType.CoolSetPoint);
  });
});
