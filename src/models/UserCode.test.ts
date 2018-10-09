import UserCode from './UserCode';

describe('UserCode', () => {
  let userCode: UserCode;

  describe('decode', () => {
    it('decodes user codes', () => {
      userCode = UserCode.decode('000003040506');
      expect(userCode.code).toBe('003456');
      expect(userCode.isProximityCard).toBe(false);
    });

    it('decodes prox card codes', () => {
      userCode = UserCode.decode('123456789012');
      expect(userCode.code).toBe('123456789012');
      expect(userCode.isProximityCard).toBe(true);
    });
  });

  describe('proximity card', () => {
    beforeEach(() => {
      userCode = new UserCode('123456789A', true);
    });

    it('encodes correctly', () => {
      expect(userCode.encode()).toBe('00123456789A');
    });
  });

  describe('4-digit code', () => {
    beforeEach(() => {
      userCode = new UserCode('3456');
    });

    it('encodes correctly', () => {
      expect(userCode.encode()).toBe('000003040506');
    });
  });

  describe('6-digit code', () => {
    beforeEach(() => {
      userCode = new UserCode('456789');
    });

    it('encodes correctly', () => {
      expect(userCode.encode()).toBe('040506070809');
    });
  });

  describe('encode', () => {
    beforeEach(() => {
      userCode = new UserCode('456789');
    });

    it('width parameter', () => {
      expect(userCode.encode(20)).toBe('00000000040506070809');
    });
  });
});
