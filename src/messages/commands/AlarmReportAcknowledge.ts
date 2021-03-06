import ElkCommand from './ElkCommand';

/**
 * Alarm Report Acknowledge
 *
 * The Ethernet Module (M1XEP) will acknowledge the M1’s Alarm Report
 * transmission with the reply: 06ar0067<cr><lf>. This acknowledge
 * is sent to the M1 only if the central station’s server acknowledges
 * the Ethernet Module’s data packet.
 *
 * @see 4.4.2 Alarm Report Acknowledge (ar)
 */
export default class AlarmReportAcknowledge extends ElkCommand {
  constructor() {
    super('a', 'r');
  }
}
