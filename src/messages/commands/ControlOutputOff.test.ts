import ControlOutputOff from './ControlOutputOff';

describe('ControlOutputOff', () => {
  let controlOutputOff: ControlOutputOff;

  describe('output 203', () => {
    beforeEach(() => {
      controlOutputOff = new ControlOutputOff(203);
    });

    it('generates the expected raw message', () => {
      expect(controlOutputOff.raw).toBe('09cf20300D9\r\n');
    });
  });

  describe('output 2', () => {
    beforeEach(() => {
      controlOutputOff = new ControlOutputOff(2);
    });

    it('generates the expected raw message', () => {
      expect(controlOutputOff.raw).toBe('09cf00200DC\r\n');
    });
  });
});
