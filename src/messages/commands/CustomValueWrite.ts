import ElkCommand from './ElkCommand';
import CustomValue from '../../models/CustomValue';

/**
 * 4.10.5 Write Custom Value (cw)
 */
export default class CustomValueWrite extends ElkCommand {
  constructor(readonly valueNumber: number, readonly value: CustomValue) {
    super('c', 'w', valueNumber.toString().padStart(2, '0') + value.encode());

    if (valueNumber < 0 || valueNumber > 20) {
      throw new RangeError('Custom value number must be between 0 and 20');
    }
  }
}
