import UserCodeChangeRequest, { encodeAreaNumbers } from './UserCodeChangeRequest';
import UserCode from '../../models/UserCode';
import UserCodeChangeType from '../../enums/UserCodeChangeType';

describe('UserCodeChangeRequest', () => {
  let userCodeChangeRequest: UserCodeChangeRequest;

  describe('encodeAreaNumbers', () => {
    it('encodes [] as 00', () => {
      expect(encodeAreaNumbers([])).toBe('00');
    });

    it('encodes undefined as 00', () => {
      expect(encodeAreaNumbers([])).toBe('00');
    });

    it('encodes 1 and 6 as 21', () => {
      expect(encodeAreaNumbers([1, 6])).toBe('21');
    });

    it('encodes 1 and 5 as 11', () => {
      expect(encodeAreaNumbers([1, 5])).toBe('11');
    });

    it('encodes 4 and 8 as 88', () => {
      expect(encodeAreaNumbers([4, 8])).toBe('88');
    });

    it('encodes all areas as FF', () => {
      expect(encodeAreaNumbers([1, 2, 3, 4, 5, 6, 7, 8])).toBe('FF');
    });
  });

  describe('change user codes as strings', () => {
    beforeEach(() => {
      userCodeChangeRequest = new UserCodeChangeRequest(5, '3456', '9876', [1, 6]);
    });

    it('generates the expected raw value', () => {
      expect(userCodeChangeRequest.raw).toBe('23cu0050000030405060000090807062100BB\r\n');
    });
  });

  describe('change user codes as UserCode', () => {
    beforeEach(() => {
      userCodeChangeRequest = new UserCodeChangeRequest(
        5,
        new UserCode('3456'),
        new UserCode('9876'),
        [1, 6]
      );
    });

    it('generates the expected raw value', () => {
      expect(userCodeChangeRequest.raw).toBe('23cu0050000030405060000090807062100BB\r\n');
    });
  });

  describe('set restriction', () => {
    beforeEach(() => {
      userCodeChangeRequest = new UserCodeChangeRequest(
        5,
        '3456',
        '8876',
        [1, 6],
        UserCodeChangeType.SetRestriction
      );
    });

    it('generates the expected raw value', () => {
      expect(userCodeChangeRequest.raw).toBe('23cu0050000030405060000080807062110BB\r\n');
    });
  });

  describe('clear restriction', () => {
    beforeEach(() => {
      userCodeChangeRequest = new UserCodeChangeRequest(
        5,
        '3456',
        '8876',
        [1, 6],
        UserCodeChangeType.ClearRestriction
      );
    });

    it('generates the expected raw value', () => {
      expect(userCodeChangeRequest.raw).toBe('23cu0050000030405060000080807062120BA\r\n');
    });
  });
});
