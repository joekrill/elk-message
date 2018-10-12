import ElkResponse from './ElkResponse';
import ZoneStatus from '../../models/ZoneStatus';

/**
 * Zone Change Update
 *
 * This transmission update option transmits the updated status
 * whenever it changes and is enabled by setting the location
 * TRUE in the M1 Control Global Programming Location 36.
 * Example: “Xmit Zone Chgs–ASCII” (Yes or No)
 *
 * @see 4.39 Zone Change Update (ZC)
 */
export default class ZoneChangeUpdate extends ElkResponse {
  static readonly COMMAND = 'ZC';

  readonly zoneNumber: number;
  readonly zoneStatus: ZoneStatus;

  constructor(raw: string) {
    super(raw);

    this.zoneNumber = parseInt(this.data.substr(0, 3), 10);
    this.zoneStatus = ZoneStatus.parse(this.data[3]);
  }
}
