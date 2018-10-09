import ThermostatSetHeatSetPoint from './ThermostatSetHeatSetPoint';

describe('ThermostatSetHeatSetPoint', () => {
  let thermostatSetHeatPoint: ThermostatSetHeatSetPoint;

  beforeEach(() => {
    thermostatSetHeatPoint = new ThermostatSetHeatSetPoint(4, 68);
  });

  it('generates the expected raw message', () => {
    expect(thermostatSetHeatPoint.raw).toBe('0Bts046850040\r\n');
  });
});
