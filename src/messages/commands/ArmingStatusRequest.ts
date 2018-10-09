import ElkCommand from './ElkCommand';

/**
 * 4.2.12 Arming Status Request (as)
 *
 * Requests current arming status
 * The control panel responds to this message with an Arming Status Report
 */
export default class ArmingStatusRequest extends ElkCommand {
  constructor() {
    super('a', 's');
  }
}
