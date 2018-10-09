import ElkCommand from './ElkCommand';

/**
 * 4.41.1 Request Zone Definition (zd)
 *
 * This command allows automation equipment to request the
 * zone definitions. 4.2.6 and after.
 */
export default class ZoneDefinitionRequest extends ElkCommand {
  constructor() {
    super('z', 'd');
  }
}
