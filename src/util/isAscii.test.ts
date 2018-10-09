import isAscii from './isAscii';

describe('isAscii', () => {
  describe('for string containing only ASCII characters', () => {
    let asciiChars: string;

    beforeEach(() => {
      // Generate a string containing all ASCII characters.
      for (let code = 0; code <= 127; code++) {
        asciiChars += String.fromCharCode(code);
      }
    });

    it('returns true', () => {
      expect(isAscii(asciiChars)).toBe(true);
    });
  });

  describe('for string containing non-ASCII characters', () => {
    const nonAsciiString = String.fromCharCode(128);

    it('returns false', () => {
      expect(isAscii(nonAsciiString)).toBe(false);
    });
  });
});
