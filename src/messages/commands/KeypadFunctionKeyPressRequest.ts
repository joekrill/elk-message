import ElkCommand from './ElkCommand';
import FunctionKey from '../../enums/FunctionKey';

/**
 * 4.22.1 Request Keypad Function Key Press (kf)
 *
 * This command simulates a function key being pressed on a keypad.
 * This will only be single key press even if the M1 Control is
 * programmed for double function key press. M1 Version 4.2.5 and
 * after.
 *
 * SilenceTroubleBeep (‘*’) key: M1 Version 4.2.6 and after
 * Chome (‘C’) key: M1 Version 4.3.2 and after.
 */
export default class KeypadFunctionKeyPressRequest extends ElkCommand {
  constructor(readonly keypadNumber: number, readonly functionKey: FunctionKey = FunctionKey.None) {
    super('k', 'f', keypadNumber.toString().padStart(2, '0') + String.fromCharCode(functionKey));
  }
}
