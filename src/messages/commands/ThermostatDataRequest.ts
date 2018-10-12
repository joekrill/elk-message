import ElkCommand from './ElkCommand';

/**
 * Request Thermostat Data
 *
 * This command allows automation equipment to monitor and control
 * HVAC Thermostats connected to the M1. All temperature settings
 * are expressed in ASCII Decimal, two digits. M1 Version 4.2.6 and after.
 *
 * @see 4.35.1 Request Thermostat Data (tr)
 */
export default class ThermostatDataRequest extends ElkCommand {
  constructor(readonly thermostatNumber: number) {
    super('t', 'r', thermostatNumber.toString().padStart(2, '0'));
  }
}
