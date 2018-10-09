import KeypadAreaAssignments from './KeypadAreaAssignments';

describe('KeypadAreaAssignments', () => {
  describe('parses', () => {
    const raw = '16KA12345678111111110081\r\n';
    let keypadAreaAssignments: KeypadAreaAssignments;

    beforeEach(() => {
      keypadAreaAssignments = new KeypadAreaAssignments(raw);
    });

    it('has the expected data', () => {
      expect(keypadAreaAssignments.getKeypadArea(3)).toBe(3);
      expect(keypadAreaAssignments.areas).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 1, 1, 1, 1, 1, 1, 1, 1]);
    });
  });
});
