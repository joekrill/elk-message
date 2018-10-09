import ControlOutputOn from './ControlOutputOn';

describe('ControlOutputOn', () => {
  let controlOutputOn: ControlOutputOn;

  describe('output 1 for 10 seconds 203', () => {
    beforeEach(() => {
      controlOutputOn = new ControlOutputOn(1, 10);
    });

    it('generates the expected raw message', () => {
      expect(controlOutputOn.raw).toBe('0Ecn0010001000D8\r\n');
    });
  });

  describe('output 42 until turned off', () => {
    beforeEach(() => {
      controlOutputOn = new ControlOutputOn(2);
    });

    it('generates the expected raw message', () => {
      expect(controlOutputOn.raw).toBe('0Ecn0020000000D8\r\n');
    });
  });
});
