import ElkCommand from './ElkCommand';
import ThermostatSetType from '../../enums/ThermostatSetType';

/**
 * 4.35.3 Set Thermostat Data (ts)
 */
export default class ThermostatSet extends ElkCommand {
  constructor(
    readonly thermostatNumber: number,
    readonly value: number,
    readonly element: ThermostatSetType
  ) {
    super(
      't',
      's',
      thermostatNumber.toString().padStart(2, '0') +
        value.toString().padStart(2, '0') +
        element.toString()
    );
  }
}
