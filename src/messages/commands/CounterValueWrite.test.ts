import CounterValueWrite from './CounterValueWrite';

describe('CounterValueWrite', () => {
  const EXPECTED_RAW = '0Dcx011234500F1\r\n';
  let counterValueWrite: CounterValueWrite;

  beforeEach(() => {
    counterValueWrite = new CounterValueWrite(1, 12345);
  });

  it('Generates the expected raw', () => {
    expect(counterValueWrite.raw).toBe(EXPECTED_RAW);
  });
});
