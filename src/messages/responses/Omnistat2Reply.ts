import ElkResponse from './ElkResponse';

/**
 * Reply - M1 to PC with Omnistat 2 ASCII Hex data
 *
 * This is the reply from the M1XSP connected to the HAI Omnistat
 * 2 HVAC Thermostat. M1 version 5.1.9 or later is required for
 * this command.
 *
 * @see 4.35.5 Reply - M1 to PC with Omnistat 2 ASCII Hex data (T2)
 */
export default class Omnistat2Reply extends ElkResponse {
  static readonly COMMAND = 'T2';
}
