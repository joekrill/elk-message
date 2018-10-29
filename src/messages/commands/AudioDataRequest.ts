import ElkCommand from './ElkCommand';

/**
 * Request Audio Data
 *
 * Request alarm by zone
 *
 * The control panel responds to this message with an Alarm By Zone Report
 *
 * @see 4.6.1 Request Audio Data (ca)
 */
export default class AudioDataRequst extends ElkCommand {
  constructor(readonly zoneNumber: number) {
    super('c', 'a', zoneNumber.toString().padStart(2, '0'));
  }
}
