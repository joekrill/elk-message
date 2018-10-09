import ElkCommand from './ElkCommand';

/**
 * 4.20.1 Request Keypad Area Assignment (ka)
 *
 * This request command allows automation equipment to request
 * the Areas that all keypads are assigned to. The return string
 * contains a 16 byte array with keypad 1’s area at array index
 * 0 and keypad 15’s area in array index 15. M1 Version 4.2.5 and after.
 */
export default class KeypadAreaAssigmentsRequest extends ElkCommand {
  constructor() {
    super('k', 'a');
  }
}
