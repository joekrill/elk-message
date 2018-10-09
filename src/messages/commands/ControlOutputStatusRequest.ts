import ElkCommand from './ElkCommand';

/**
 * 4.9.3 Control Output Status Request (cs)
 *
 * The control panel responds with a Control Output Status Report for all 208 outputs.
 *
 * @see {ControlOutputStatusReport}
 */
export default class ControlOutputStatusRequest extends ElkCommand {
  constructor() {
    super('c', 's');
  }
}
