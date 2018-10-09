import UserCodeChangeReply from './UserCodeChangeReply';
import UserCodeChangeType from '../../enums/UserCodeChangeType';

describe('UserCodeChangeReply', () => {
  let userCodeChangeReply: UserCodeChangeReply;
  describe('parses', () => {
    describe('user code 5 changed', () => {
      const raw = '09CU005000A\r\n';

      beforeEach(() => {
        userCodeChangeReply = new UserCodeChangeReply(raw);
      });

      it('reports the expected values', () => {
        expect(userCodeChangeReply.userCode).toBe(5);
        expect(userCodeChangeReply.isSuccessful).toBe(true);
        expect(userCodeChangeReply.isInvalidAuthorizationCode).toBe(false);
        expect(userCodeChangeReply.isDuplicateCode).toBe(false);
        expect(userCodeChangeReply.changeType).toBe(UserCodeChangeType.UserCode);
      });
    });

    describe('invalid authorization code', () => {
      const raw = '09CU000000F\r\n';

      beforeEach(() => {
        userCodeChangeReply = new UserCodeChangeReply(raw);
      });

      it('reports the expected values', () => {
        expect(userCodeChangeReply.userCode).toBe(0);
        expect(userCodeChangeReply.isSuccessful).toBe(false);
        expect(userCodeChangeReply.isInvalidAuthorizationCode).toBe(true);
        expect(userCodeChangeReply.isDuplicateCode).toBe(false);
        expect(userCodeChangeReply.changeType).toBe(UserCodeChangeType.UserCode);
      });
    });

    describe('duplicate code', () => {
      const raw = '09CU2550003\r\n';

      beforeEach(() => {
        userCodeChangeReply = new UserCodeChangeReply(raw);
      });

      it('reports the expected values', () => {
        expect(userCodeChangeReply.userCode).toBe(255);
        expect(userCodeChangeReply.isSuccessful).toBe(false);
        expect(userCodeChangeReply.isInvalidAuthorizationCode).toBe(false);
        expect(userCodeChangeReply.isDuplicateCode).toBe(true);
        expect(userCodeChangeReply.changeType).toBe(UserCodeChangeType.UserCode);
      });
    });

    describe('restrict code', () => {
      const raw = '09CU0051009\r\n';

      beforeEach(() => {
        userCodeChangeReply = new UserCodeChangeReply(raw);
      });

      it('reports the expected values', () => {
        expect(userCodeChangeReply.userCode).toBe(5);
        expect(userCodeChangeReply.isSuccessful).toBe(true);
        expect(userCodeChangeReply.isInvalidAuthorizationCode).toBe(false);
        expect(userCodeChangeReply.isDuplicateCode).toBe(false);
        expect(userCodeChangeReply.changeType).toBe(UserCodeChangeType.SetRestriction);
      });
    });

    describe('clear code restriction', () => {
      const raw = '09CU0052008\r\n';

      beforeEach(() => {
        userCodeChangeReply = new UserCodeChangeReply(raw);
      });

      it('reports the expected values', () => {
        expect(userCodeChangeReply.userCode).toBe(5);
        expect(userCodeChangeReply.isSuccessful).toBe(true);
        expect(userCodeChangeReply.isInvalidAuthorizationCode).toBe(false);
        expect(userCodeChangeReply.isDuplicateCode).toBe(false);
        expect(userCodeChangeReply.changeType).toBe(UserCodeChangeType.ClearRestriction);
      });
    });
  });
});
