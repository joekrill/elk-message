import ElkCommand from './ElkCommand';
import UserCode from '../../models/UserCode';
import { RESERVED_DEFAULT } from '../constants';
import UserCodeChangeType from '../../enums/UserCodeChangeType';

/**
 * Encodes selected area numbers.
 *
 * Two ASCII Hex characters, 0-9,A-F, using the Hex value of each
 * character as the mask for 4 areas. Right most character is
 * areas 1 to 4 with bit 0 equal to Area 1.
 *
 * @param areaNumbers An array of area numbers to encode
 * @return {string} The area numbers encoded as hex.
 */
export function encodeAreaNumbers(areaNumbers?: number[]) {
  if (!areaNumbers || !areaNumbers.length) {
    return '00';
  }

  // Start with an array of all 0s, replacing any area numbers with 1's.
  const bitValues = areaNumbers
    .reduce(
      (bits, areaNumber) =>
        bits
          .slice(0, areaNumber - 1)
          .concat(1)
          .concat(bits.slice(areaNumber)),
      [0, 0, 0, 0, 0, 0, 0, 0]
    )
    .reverse(); // reverse: bit 0 = area 1, etc.

  // Join them as a single string and parse them as a binary number,
  // then convert them to a 2-character hex string.
  return parseInt(bitValues.join(''), 2)
    .toString(16)
    .padStart(2, '0')
    .toUpperCase();
}

function generateData(
  userNumber: number,
  masterOrCurrentUserCode: string | UserCode,
  newUserCode: string | UserCode,
  areaNumbers?: number[]
) {
  const authCode =
    typeof masterOrCurrentUserCode === 'string'
      ? new UserCode(masterOrCurrentUserCode)
      : masterOrCurrentUserCode;
  const newCode = typeof newUserCode === 'string' ? new UserCode(newUserCode) : newUserCode;
  return (
    userNumber.toString().padStart(3, '0') +
    authCode.encode() +
    newCode.encode() +
    encodeAreaNumbers(areaNumbers)
  );
}

/**
 * Request Change User Code
 *
 * This command allows automation equipment to change a user code. The
 * data packet must include a Master User Code or the current user code
 * of the user code to be changed. 4.3.9 and after.
 *
 * @see 4.11.1 Request Change User Code (cu)
 */
export default class UserCodeChangeRequest extends ElkCommand {
  readonly newUserCode: UserCode;
  readonly authorizationUserCode: UserCode;

  constructor(
    readonly userNumber: number,
    masterOrCurrentUserCode: string | UserCode,
    newUserCode: string | UserCode,
    readonly areaNumbers?: number[],
    readonly changeType: UserCodeChangeType = UserCodeChangeType.UserCode
  ) {
    super('c', 'u', generateData(userNumber, masterOrCurrentUserCode, newUserCode, areaNumbers));
    this.authorizationUserCode =
      typeof masterOrCurrentUserCode === 'string'
        ? new UserCode(masterOrCurrentUserCode)
        : masterOrCurrentUserCode;
    this.newUserCode = typeof newUserCode === 'string' ? new UserCode(newUserCode) : newUserCode;
  }

  get reserved(): string {
    return this.changeType.toString() + '0';
  }
}
