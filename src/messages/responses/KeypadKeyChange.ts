import ElkResponse from './ElkResponse';
import BeepAndChimeMode from '../../enums/BeepAndChimeMode';
import KeypadKey from '../../enums/KeypadKey';
import IlluminationStatus from '../../enums/IlluminationStatus';

/**
 * Keypad KeyChange Update
 *
 * @see 4.21 Keypad KeyChange Update (KC)
 */
export default class KeypadKeyChange extends ElkResponse {
  static readonly COMMAND = 'KC';

  readonly keypadNumber: number;
  readonly keyPressed: KeypadKey;
  readonly functionKeyIlluminations: IlluminationStatus[];
  readonly isCodeRequiredToBypass: boolean;
  readonly areaBeepAndChimeModes: BeepAndChimeMode[];

  constructor(raw: string) {
    super(raw);

    this.keypadNumber = parseInt(this.data.substr(0, 2), 10);
    this.keyPressed = parseInt(this.data.substr(2, 2), 10);
    this.functionKeyIlluminations = Array.from(this.data.substr(4, 6)).map(illumination =>
      illumination.charCodeAt(0)
    );
    this.isCodeRequiredToBypass = this.data.substr(10, 1) === '1';
    this.areaBeepAndChimeModes = Array.from(this.data.substr(11, 8)).map(mode =>
      mode.charCodeAt(0)
    );
  }

  getBeepAndChimeMode(areaNumber: number) {
    return this.areaBeepAndChimeModes[areaNumber - 1];
  }

  getFunctionKeyIllumination(keyNumber: number) {
    return this.functionKeyIlluminations[keyNumber - 1];
  }
}
