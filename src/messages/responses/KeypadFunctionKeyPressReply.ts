import ElkResponse from './ElkResponse';
import FunctionKey from '../../enums/FunctionKey';
import ChimeMode from '../../enums/ChimeMode';

/**
 * 4.22.2 Reply Keypad Function Key Press (KF)
 */
export default class KeypadFunctionKeyPressReply extends ElkResponse {
  static readonly COMMAND = 'KF';

  readonly keypadNumber: number;
  readonly functionKey: FunctionKey;
  readonly chimeModes: ChimeMode[];

  constructor(raw: string) {
    super(raw);
    this.keypadNumber = parseInt(this.data.substr(0, 2), 10);
    this.functionKey = this.data.substr(2, 1).charCodeAt(0);
    this.chimeModes = Array.from(this.data.substr(3, 8)).map(char => char.charCodeAt(0));
  }

  getChimeMode(areaNumber: number) {
    return this.chimeModes[areaNumber - 1];
  }
}
