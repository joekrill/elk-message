import ElkCommand from './ElkCommand';

/**
 * Requests current arming status for all areas.
 *
 * The control panel responds to this message with a {@link ArmingStatusReport}
 *
 * @see 4.2.12 Arming Status Request (as)
 */
export default class ArmingStatusRequest extends ElkCommand {
  constructor() {
    super('a', 's');
  }
}
