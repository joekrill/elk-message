import CustomValueRead from './CustomValueRead';

describe('CustomValueRead', () => {
  const EXPECTED_RAW = '08cr010002\r\n';
  let customValueRead: CustomValueRead;

  describe('valid value number', () => {
    beforeEach(() => {
      customValueRead = new CustomValueRead(1);
    });

    it('Generates the expected raw', () => {
      expect(customValueRead.raw).toBe(EXPECTED_RAW);
    });
  });

  describe('invalid value number', () => {
    expect(() => (customValueRead = new CustomValueRead(21))).toThrow(RangeError);
  });
});
