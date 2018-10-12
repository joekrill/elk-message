import ElkCommand from './ElkCommand';

/**
 * Read Counter Value
 *
 * The control responds with {@link CounterValueReply}
 *
 * @see 4.12.1 Read Counter Value (cv)
 */
export default class CounterValueRead extends ElkCommand {
  constructor(readonly counterNumber: number) {
    super('c', 'v', counterNumber.toString().padStart(2, '0'));

    if (counterNumber < 1 || counterNumber > 64) {
      throw new RangeError('Counter value number must be between 1 and 64');
    }
  }
}
