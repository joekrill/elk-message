import UserCodeAreasRequest from './UserCodeAreasRequest';

describe('UserCodeAreasRequest', () => {
  let userCodeAreasRequest: UserCodeAreasRequest;

  describe('for code 3456', () => {
    beforeEach(() => {
      userCodeAreasRequest = new UserCodeAreasRequest('3456');
    });

    it('generates the expected raw message', () => {
      expect(userCodeAreasRequest.raw).toBe('0Cua0034560025\r\n');
    });
  });

  describe('for code 3456', () => {
    beforeEach(() => {
      userCodeAreasRequest = new UserCodeAreasRequest('123456');
    });

    it('generates the expected raw message', () => {
      expect(userCodeAreasRequest.raw).toBe('0Cua1234560022\r\n');
    });
  });
});
