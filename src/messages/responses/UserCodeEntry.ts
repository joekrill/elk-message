import ElkResponse from './ElkResponse';
import UserCode from '../../models/UserCode';

/**
 * Send Valid User Number And Invalid User Code
 *
 * This ASCII Data Packet will be sent when a user code is entered
 * and a valid code is found. Only the valid user code number will be
 * returned. If a user code is not found in the M1’s User Code Data
 * Base, the code that was enter will be sent. If the User Code
 * Length is set to 4 digits, the invalid data packet will be sent
 * after 4 digits are entered, then repeated for each additional
 * invalid user code digit. If the User Code Length is set to 6
 * digits, the invalid data packet will be sent after 6 digits
 * are entered, then repeated for each additional invalid user
 * digit. If prox card data is enter, the packet will be sent
 * immediately. This data can be used by automation equipment
 * with its own user code data base. The automation equipment
 * would sent the appropriate arm/disarm command (“a0” to “a6”)
 * or output relay control commands (“cn”, “cf”, or “ct”) back
 * to the M1 after it has verified the proper code is in its data
 * base. Modified for 26 bit Weigand data cards and available in
 * M1 Version 4.2.8 and after.
 *
 * @see 4.17 Send Valid User Number And Invalid User Code (IC)
 */
export default class UserCodeEntry extends ElkResponse {
  static readonly COMMAND = 'IC';

  readonly userCode: UserCode;

  readonly userNumber: number;

  readonly keypadNumber: number;

  constructor(raw: string) {
    super(raw);
    this.userCode = UserCode.decode(this.data.substr(0, 12));
    this.userNumber = parseInt(this.data.substr(12, 3), 10);
    this.keypadNumber = parseInt(this.data.substr(15, 3), 10);
  }

  get isValidEntry() {
    return this.userNumber !== 0;
  }
}
