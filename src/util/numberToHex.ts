/**
 * Converts a number to it's hexadecimal notation equivalent.
 * @param value The number to convert.
 * @param width The number of characters to pad the result to.
 * @return {string} A hexidecimal string representing the number provided.
 */
export default function numberToHex(value: number, width: number = 2): string {
  return value
    .toString(16)
    .toUpperCase()
    .padStart(width, '0');
}
