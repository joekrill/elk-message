import ElkResponse from './ElkResponse';
import ZoneStatus from '../../models/ZoneStatus';

/**
 * 4.40.6 Zone Status Report (ZS)
 *
 * The control panel sends this message in response
 * to a Zone Status Request. The data portion of this
 * message is 208 characters long, one character for
 * each zone in order. Each character is the sum of
 * all applicable status values, expressed in hexadecimal,
 * using ASCII characters 0-9 and A-F.
 */
export default class ZoneStatusReport extends ElkResponse {
  static readonly COMMAND = 'ZS';

  readonly zoneStatuses: ZoneStatus[];

  constructor(raw: string) {
    super(raw);
    this.zoneStatuses = Array.from(this.data).map(char => ZoneStatus.parse(char));
  }

  getZoneStatus(zoneNumber: number) {
    return this.zoneStatuses[zoneNumber - 1];
  }
}
