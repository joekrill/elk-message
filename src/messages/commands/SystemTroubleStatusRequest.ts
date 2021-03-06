import ElkCommand from './ElkCommand';

/**
 * Request System Trouble Status
 *
 * This command allows automation equipment to poll for
 * system trouble status. Firmware revision 4.5.4, 5.1.4
 * and after. This message will automatically be sent
 * upon a trouble status change.
 *
 * @see 4.30.1 Request System Trouble Status (ss)
 */
export default class SystemTroubleStatusRequest extends ElkCommand {
  constructor() {
    super('s', 's');
  }
}
