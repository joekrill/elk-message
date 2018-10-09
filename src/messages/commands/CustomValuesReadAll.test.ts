import CustomValuesReadAll from './CustomValuesReadAll';

describe('CustomValuesReadAll', () => {
  const EXPECTED_RAW = '06cp0067\r\n';
  let customValueReadAll: CustomValuesReadAll;

  beforeEach(() => {
    customValueReadAll = new CustomValuesReadAll();
  });

  it('Generates the expected raw', () => {
    expect(customValueReadAll.raw).toBe(EXPECTED_RAW);
  });
});
