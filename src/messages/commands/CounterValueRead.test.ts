import CounterValueRead from './CounterValueRead';

describe('CounterValueRead', () => {
  const EXPECTED_RAW = '08cv0100FE\r\n';
  let counterValueRead: CounterValueRead;

  describe('valid value number', () => {
    beforeEach(() => {
      counterValueRead = new CounterValueRead(1);
    });

    it('Generates the expected raw', () => {
      expect(counterValueRead.raw).toBe(EXPECTED_RAW);
    });
  });

  describe('invalid value number', () => {
    expect(() => (counterValueRead = new CounterValueRead(65))).toThrow(RangeError);
  });
});
