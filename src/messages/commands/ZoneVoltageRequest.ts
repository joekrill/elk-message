import ElkCommand from './ElkCommand';

/**
 * Request Zone Voltage
 *
 * This command allows automation equipment to request a
 * zone analog voltage level. M1 Version 4.2.8 and after.
 *
 * @see 4.43.1 Request Zone Voltage (zv)
 */
export default class ZoneVoltageRequest extends ElkCommand {
  constructor(readonly zoneNumber: number) {
    super('z', 'v', zoneNumber.toString().padStart(3, '0'));
  }
}
