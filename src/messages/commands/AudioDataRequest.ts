import ElkCommand from './ElkCommand';

/**
 * Request Audio Data
 *
 * The control panel responds to this message with a {@link AudioDataReply}
 *
 * @see 4.6.1 Request Audio Data (ca)
 */
export default class AudioDataRequest extends ElkCommand {
  constructor(readonly zoneNumber: number) {
    super('c', 'a', zoneNumber.toString().padStart(2, '0'));
  }
}
