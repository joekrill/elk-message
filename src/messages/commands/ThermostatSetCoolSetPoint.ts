import ThermostatSet from './ThermostatSet';
import ThermostatSetType from '../../enums/ThermostatSetType';

/**
 * 4.35.3 Set Thermostat Data (ts)
 */
export default class ThermostatSetCoolSetPoint extends ThermostatSet {
  constructor(thermostatNumber: number, readonly temperature: number) {
    super(thermostatNumber, temperature, ThermostatSetType.CoolSetPoint);
  }
}
