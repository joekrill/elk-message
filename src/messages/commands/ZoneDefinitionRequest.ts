import ElkCommand from './ElkCommand';

/**
 * Request Zone Definition
 *
 * This command allows automation equipment to request the
 * zone definitions. 4.2.6 and after.
 *
 * @see 4.41.1 Request Zone Definition (zd)
 */
export default class ZoneDefinitionRequest extends ElkCommand {
  constructor() {
    super('z', 'd');
  }
}
