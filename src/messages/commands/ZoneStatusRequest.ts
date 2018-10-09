import ElkCommand from './ElkCommand';

/**
 * 4.40.5 Zone Status Request (zs)
 *
 * The control panel responds with a Zone Status Report.
 *
 * Note: This message should be sent only when an initial
 * connection is made with the control panel. It is not
 * intended to be used as a ‘polling’ command. The control
 * panel can be programmed to send zone and system status
 * messages whenever the status changes with Global Programming
 * Location 33 – 37 in the M1 Control.
 */
export default class ZoneStatusRequest extends ElkCommand {
  constructor() {
    super('z', 's');
  }
}
