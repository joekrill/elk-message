import ElkCommand from './ElkCommand';

/**
 * Zone Partition Request
 *
 * The Control panel responds with a {@link ZonePartitionReport}
 * which tells what Area is assigned to each zone.
 *
 * @see 4.40.3 Zone Partition Request (zp)
 */
export default class ZonePartitionRequest extends ElkCommand {
  constructor() {
    super('z', 'p');
  }
}
