import { parse } from './';

/**
 * Dummy test
 */
describe('exports', () => {
  it('includes expected exports', () => {
    expect(typeof parse).toBe('function');
  });
});
