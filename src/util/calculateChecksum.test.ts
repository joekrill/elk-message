import calculateChecksum, { twosComplement } from './calculateChecksum';

const TWOS_COMPLIMENT_TESTS: [number, number][] = [
  [1, 255],
  [10, 246],
  [16, 240],
  [42, 214],
  [150, 106],
  [200, 56]
];

describe('twosComplement', () => {
  TWOS_COMPLIMENT_TESTS.forEach(([input, output]) => {
    it(`calculates the two's compliment of ${input} as ${output}`, () => {
      expect(twosComplement(input)).toBe(output);
    });
  });

  it('throws a RangeError if given a value greater than 255', () => {
    expect(() => twosComplement(256)).toThrowError(RangeError);
  });

  it('throws a RangeError if given a value less than -0', () => {
    expect(() => twosComplement(-1)).toThrowError(RangeError);
  });
});

const CHECKSUM_TESTS: [string, string][] = [
  ['06as00', '66'],
  ['1EAS10000000400000003000000000', '0E'],
  ['16AR123456113401001100', '85'],
  ['07AT100', '73'],
  ['06ar00', '67'],
  ['06az00', '5F'],
  ['0Fcd01020300000', 'AD'],
  ['22IR0014123456ABCDEF987654A1B2C300', '6F'],
  ['22ip0014123456ABCDEF987654A1B2C300', '31'],
  ['47PS0011111111111111100000000000000000000000000000000000000000000000000', '53'],
  ['CCAS10000000400000003000000000', 'FE'],
  [
    'D6AZ000000009000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000',
    '82'
  ]
];

describe('calculateChecksum', () => {
  CHECKSUM_TESTS.forEach(([input, output]) => {
    it(`calculates the checksum of ${input} as ${output}`, () => {
      expect(calculateChecksum(input)).toBe(output);
    });
  });
});
