import ElkResponse from './ElkResponse';

/**
 * 4.40.4 Zone Partition Report (ZP)
 *
 * The control panel sends this message in response to a
 * Zone Partition Request. The data portion, D, of this
 * message is 208 characters long, one character for each
 * zone in order. The value will be from 1-8.
 */
export default class ZonePartitionReport extends ElkResponse {
  static readonly COMMAND = 'ZP';

  readonly zonePartitions: number[];

  constructor(raw: string) {
    super(raw);
    this.zonePartitions = Array.from(this.data).map(char => parseInt(char, 10));
  }

  getZoneArea(zoneNumber: number) {
    return this.zonePartitions[zoneNumber - 1];
  }
}
