const ASCII_REGEX = /^[\x00-\x7F]*$/;

function isAscii(input: string): boolean {
  return ASCII_REGEX.test(input);
}

export default isAscii;
