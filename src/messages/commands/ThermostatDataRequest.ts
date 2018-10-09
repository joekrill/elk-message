import ElkCommand from './ElkCommand';

/**
 * 4.35.1 Request Thermostat Data (tr)
 *
 * This command allows automation equipment to monitor and control
 * HVAC Thermostats connected to the M1. All temperature settings
 * are expressed in ASCII Decimal, two digits. M1 Version 4.2.6 and after.
 */
export default class ThermostatDataRequest extends ElkCommand {
  constructor(readonly thermostatNumber: number) {
    super('t', 'r', thermostatNumber.toString().padStart(2, '0'));
  }
}
