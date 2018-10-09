import UserCodeEntry from './UserCodeEntry';

describe('UserCodeEntry', () => {
  describe('parses', () => {
    describe('invalid keypad code', () => {
      const raw = '17IC0000030405060000100CC\r\n';
      let userCodeEntry: UserCodeEntry;

      beforeEach(() => {
        userCodeEntry = new UserCodeEntry(raw);
      });

      it('has the expected data', () => {
        expect(userCodeEntry.userCode.code).toBe('003456');
        expect(userCodeEntry.userCode.isProximityCard).toBe(false);
        expect(userCodeEntry.userNumber).toBe(0);
        expect(userCodeEntry.keypadNumber).toBe(1);
        expect(userCodeEntry.isValidEntry).toBe(false);
      });
    });

    describe('invalid proximity card', () => {
      const raw = '17IC12345678901200001004B\r\n';
      let userCodeEntry: UserCodeEntry;

      beforeEach(() => {
        userCodeEntry = new UserCodeEntry(raw);
      });

      it('has the expected data', () => {
        expect(userCodeEntry.userCode.code).toBe('123456789012');
        expect(userCodeEntry.userCode.isProximityCard).toBe(true);
        expect(userCodeEntry.userNumber).toBe(0);
        expect(userCodeEntry.keypadNumber).toBe(1);
        expect(userCodeEntry.isValidEntry).toBe(false);
      });
    });
  });
});
