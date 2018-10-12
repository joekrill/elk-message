import ElkCommand from './ElkCommand';

/**
 * Request Temperature Data
 *
 * This command allows automation equipment to request
 * the temperatures from zone temperature sensors and
 * keypad temperatures in one ASCII packet.
 * M1 Version 4.3.4 andafter.
 *
 * @see 4.24.1 Request Temperature Data (lw)
 */
export default class TemperatureDataRequest extends ElkCommand {
  constructor() {
    super('l', 'w');
  }
}
