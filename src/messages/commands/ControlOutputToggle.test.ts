import ControlOutputToggle from './ControlOutputToggle';

describe('ControlOutputToggle', () => {
  let controlOutputOn: ControlOutputToggle;

  describe('output 2', () => {
    beforeEach(() => {
      controlOutputOn = new ControlOutputToggle(2);
    });

    it('generates the expected raw message', () => {
      expect(controlOutputOn.raw).toBe('09ct00200CE\r\n');
    });
  });
});
