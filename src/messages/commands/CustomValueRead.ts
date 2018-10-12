import ElkCommand from './ElkCommand';

/**
 * Read Custom Value
 *
 * The control response with {@link CustomValueReply}
 *
 * @see 4.10.1 Read Custom Value (cr)
 */
export default class CustomValueRead extends ElkCommand {
  constructor(readonly valueNumber: number) {
    super('c', 'r', valueNumber.toString().padStart(2, '0'));

    if (valueNumber < 0 || valueNumber > 20) {
      throw new RangeError('Custom value number must be between 0 and 20');
    }
  }
}
