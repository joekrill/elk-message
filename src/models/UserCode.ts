/**
 * Matches on a user-entered code.
 */
const USER_CODE_REGEX = /^(0\d)(0\d)(0\d)(0\d)(0\d)(0\d)$/;

export default class UserCode {
  static decode(input: string) {
    const userCodeMatch = input.match(USER_CODE_REGEX);

    if (userCodeMatch) {
      // The regex match result contains the entire string as index 0,
      // and each match as index 1..7. Each of those will be preceded by
      // a zero, so exclude those "0" characters and join them to get the
      // code.
      return new UserCode(
        userCodeMatch
          .slice(1, 7)
          .map(char => char[1])
          .join(''),
        false
      );
    } else {
      return new UserCode(input, true);
    }
  }

  constructor(readonly code: string, readonly isProximityCard: boolean = false) {}

  encode(width = 12) {
    if (this.isProximityCard) {
      return this.code.padStart(width, '0');
    }

    return Array.from(this.code)
      .map(char => `0${char}`)
      .join('')
      .padStart(width, '0');
  }
}
