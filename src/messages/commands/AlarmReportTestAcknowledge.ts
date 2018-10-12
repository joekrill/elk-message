import ElkCommand from './ElkCommand';

/**
 * Alarm Reporting Test Acknowledge
 *
 * If the Alarm Reporting Test if successful to the central station’s IP
 * address the Acknowledge message will be sent to the M1 from the
 * M1XEP: 06at0065<cr><lf>.
 *
 * @see 4.4.4 Alarm Reporting Test Acknowledge (at)
 */
export default class AlarmReportTestAcknowledge extends ElkCommand {
  constructor() {
    super('a', 't');
  }
}
