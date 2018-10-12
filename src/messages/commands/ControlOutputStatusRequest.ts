import ElkCommand from './ElkCommand';

/**
 * Control Output Status Request
 *
 * The control panel responds with a {@link ControlOutputStatusReport} Report for all 208 outputs.
 *
 * @see 4.9.3 Control Output Status Request (cs)
 */
export default class ControlOutputStatusRequest extends ElkCommand {
  constructor() {
    super('c', 's');
  }
}
