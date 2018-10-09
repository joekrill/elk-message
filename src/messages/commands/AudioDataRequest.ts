import ElkCommand from './ElkCommand';

/**
 * 4.6.1 Request Audio Data (ca)
 *
 * Request alarm by zone
 *
 * The control panel responds to this message with an Alarm By Zone Report
 */
export default class AudioDataRequst extends ElkCommand {
  constructor(readonly zoneNumber: number) {
    super('c', 'a', zoneNumber.toString().padStart(2, '0'));
  }
}
