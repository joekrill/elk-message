import { parse } from './';

describe('exports', () => {
  it('includes expected exports', () => {
    expect(typeof parse).toBe('function');
  });
});
