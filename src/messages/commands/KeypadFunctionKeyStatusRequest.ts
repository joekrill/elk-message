import ElkCommand from './ElkCommand';

/**
 * Request Keypad Function Key Illumination Status
 *
 * The function key illumination request returns the Keypad KeyChange
 * Update (KC) data with the Key Number set to zero (0). This command
 * allows automation equipment to request the illumination status of
 * the keypad function keys for building virtual keypads on a PC.
 *
 * @see 4.21.1 Request Keypad Function Key Illumination Status (kc)
 */
export default class KeypadFunctionKeyStatusRequest extends ElkCommand {
  constructor(readonly keypadNumber: number) {
    super('k', 'c', keypadNumber.toString().padStart(2, '0'));
  }
}
