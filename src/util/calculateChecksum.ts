import { CHECKSUM_WIDTH } from '../messages/constants';
import numberToHex from './numberToHex';

/**
 * Returns the two's complement of a value between 0 and 255.
 * @param value The value to calculate the two's compliment for.
 * @return The two's complement of the value.
 * @throws {RAngeError} if the value is less than 0 or greater than 255.
 */
export function twosComplement(value: number): number {
  if (value < 0 || value > 255) {
    throw new RangeError('Value must be between 0 and 255');
  }

  return (value ^ 0xff) + 1;
}

/**
 * Calculates the checksum for an elk message.
 * @see {M1-RS232-ASCII-Protocol} 4.1.6
 *
 * This is the hexadecimal two’s complement of the modulo-256 sum
 * of the ASCII values of all characters in the message excluding
 * the checksum itself and the CR-LF terminator at the end of the
 * message. Permissible characters are ASCII 0-9 and upper case A-F.
 * When all the characters are added to the Checksum, the value should equal 0.
 */
export default function calculateChecksum(input: string) {
  const inputBuffer = Buffer.from(input, 'ascii');

  // Sum all of the ASCII values.
  const sum = inputBuffer.reduce((accumulator, char) => accumulator + char, 0);

  // Find the two's complement of the module-256 sum.
  const checksum = twosComplement(sum % 256);

  // Convert it to hex.
  return numberToHex(checksum, CHECKSUM_WIDTH);
}
