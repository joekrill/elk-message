import ElkCommand from './ElkCommand';

/**
 * 4.21.1 Request Keypad Function Key Illumination Status (kc)
 *
 * The function key illumination request returns the Keypad KeyChange
 * Update (KC) data with the Key Number set to zero (0). This command
 * allows automation equipment to request the illumination status of
 * the keypad function keys for building virtual keypads on a PC.
 */
export default class KeypadFunctionKeyStatusRequest extends ElkCommand {
  constructor(readonly keypadNumber: number) {
    super('k', 'c', keypadNumber.toString().padStart(2, '0'));
  }
}
