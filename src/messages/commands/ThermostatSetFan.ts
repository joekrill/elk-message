import ThermostatSet from './ThermostatSet';
import ThermostatSetType from '../../enums/ThermostatSetType';

/**
 * Set Thermostat Data
 *
 * @see 4.35.3 Set Thermostat Data (ts)
 */
export default class ThermostatSetFan extends ThermostatSet {
  constructor(thermostatNumber: number, readonly isOn: boolean) {
    super(thermostatNumber, isOn ? 1 : 0, ThermostatSetType.Fan);
  }
}
