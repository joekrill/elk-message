import ElkCommand from './ElkCommand';

/**
 * 4.10.1 Read Custom Value (cr)
 *
 * @see {CustomValueReply}
 */
export default class CustomValueRead extends ElkCommand {
  constructor(readonly valueNumber: number) {
    super('c', 'r', valueNumber.toString().padStart(2, '0'));

    if (valueNumber < 0 || valueNumber > 20) {
      throw new RangeError('Custom value number must be between 0 and 20');
    }
  }
}
