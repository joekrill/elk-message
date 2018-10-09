import numberToHex from './numberToHex';

describe('numberToHex', () => {
  it('generates the correct hex value', () => {
    expect(numberToHex(42)).toBe('2A');
  });

  it('pads to a width of 2 by default', () => {
    expect(numberToHex(12)).toBe('0C');
  });

  it('pads to the specified width when given', () => {
    expect(numberToHex(90, 5)).toBe('0005A');
  });
});
