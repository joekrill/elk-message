import ElkCommand from './ElkCommand';

/**
 * 4.40.1 Zone Bypass Request (zb)
 *
 * This command allows for bypassing/unbypassing a zone.
 * Zone = 000 will unbypass all burglar zones in the.
 * Zone = 999 will bypass all violated burglar zones.
 * Area to bypass/unbypass is required if Zone equals
 * 000 or 999 otherwise it is ignored.
 */
export default class ZoneBypassRequest extends ElkCommand {
  constructor(
    readonly pinCode: string,
    readonly zoneNumber: number,
    readonly areaNumber: number = 0
  ) {
    super(
      'z',
      'b',
      zoneNumber.toString().padStart(3, '0') + areaNumber.toString() + pinCode.padStart(6, '0')
    );
  }
}
