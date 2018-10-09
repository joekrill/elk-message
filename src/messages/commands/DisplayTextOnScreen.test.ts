import DisplayTextOnScreen, { encodeLineData } from './DisplayTextOnScreen';
import DisplayTextClearOption from '../../enums/DisplayTextClearOption';

describe('DisplayTextOnScreen', () => {
  let displayTextOnScreen: DisplayTextOnScreen;

  describe('Two lines, 20 second timeout', () => {
    beforeEach(() => {
      displayTextOnScreen = new DisplayTextOnScreen(
        1,
        'abc',
        'ABCDEF',
        DisplayTextClearOption.ClearWithStarKey,
        false,
        20
      );
    });

    it('Generates the expected raw', () => {
      expect(displayTextOnScreen.raw.substr(0, 16)).toBe('2Edm11000020abc^');
      expect(displayTextOnScreen.raw.substr(28, 7)).toBe('ABCDEF^');
    });

    it('has the expected values', () => {
      expect(displayTextOnScreen.beep).toBe(false);
    });
  });

  describe('One line', () => {
    beforeEach(() => {
      displayTextOnScreen = new DisplayTextOnScreen(1, 'Foobar');
    });
    it('Generates the expected raw', () => {
      expect(displayTextOnScreen.raw.substr(0, 19)).toBe('2Edm11100000Foobar^');
      expect(displayTextOnScreen.raw.substr(28, 1)).toBe('^');
    });

    it('has the expected values', () => {
      expect(displayTextOnScreen.clearOption).toBe(DisplayTextClearOption.ClearWithStarKey);
      expect(displayTextOnScreen.beep).toBe(true);
      expect(displayTextOnScreen.timeout).toBe(0);
    });
  });

  describe('Clear message', () => {
    beforeEach(() => {
      displayTextOnScreen = new DisplayTextOnScreen(3);
    });

    it('Generates the expected raw', () => {
      expect(displayTextOnScreen.raw.substr(0, 6)).toBe('2Edm30');
    });

    it('has the expected values', () => {
      expect(displayTextOnScreen.clearOption).toBe(DisplayTextClearOption.Clear);
    });
  });

  describe('encodeLineData', () => {
    describe('empty', () => {
      it('returns the terminator character with padding', () => {
        const lineData = encodeLineData('');
        expect(lineData.length).toBe(16);
        expect(lineData[0]).toBe('^');
      });
    });

    describe('undefined', () => {
      it('returns the terminator character with padding', () => {
        const lineData = encodeLineData(undefined);
        expect(lineData.length).toBe(16);
        expect(lineData[0]).toBe('^');
      });
    });

    describe('null', () => {
      it('returns the terminator character with padding', () => {
        const lineData = encodeLineData(null);
        expect(lineData.length).toBe(16);
        expect(lineData[0]).toBe('^');
      });
    });

    describe('less than 16 characters', () => {
      it('pads the result', () => {
        const lineData = encodeLineData('FooBar');
        expect(lineData.length).toBe(16);
        expect(lineData.substr(0, 6)).toBe('FooBar');
      });
    });

    describe('16 characters', () => {
      it('returns the input', () => {
        const lineData = encodeLineData('Undiscriminating');
        expect(lineData.length).toBe(16);
        expect(lineData).toBe('Undiscriminating');
      });
    });

    describe('more than 16 characters', () => {
      it('truncates the result', () => {
        const lineData = encodeLineData('antidisestablishmentarianism');
        expect(lineData.length).toBe(16);
        expect(lineData).toBe('antidisestablish');
      });
    });
  });
});
