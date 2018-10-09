import ElkCommand from './ElkCommand';

/**
 * 4.40.3 Zone Partition Request (zp)
 *
 * The Control panel responds with a Zone Partition Report
 * which tells what Area is assigned to each zone.
 */
export default class ZonePartitionRequest extends ElkCommand {
  constructor() {
    super('z', 'p');
  }
}
