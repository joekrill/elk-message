import ThermostatSet from './ThermostatSet';
import ThermostatMode from '../../enums/ThermostatMode';
import ThermostatSetType from '../../enums/ThermostatSetType';

/**
 * 4.35.3 Set Thermostat Data (ts)
 */
export default class ThermostatSetMode extends ThermostatSet {
  constructor(thermostatNumber: number, readonly mode: ThermostatMode) {
    super(thermostatNumber, mode - 48, ThermostatSetType.Mode);
  }
}
