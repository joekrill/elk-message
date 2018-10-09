import UserCodeAreasReply from './UserCodeAreasReply';
import UserCodeType from '../../enums/UserCodeType';

describe('UserCodeAreasReply', () => {
  describe('parses', () => {
    const raw = '19UA123456C30000000041F00CA\r\n';
    let userCodeAreasReply: UserCodeAreasReply;

    beforeEach(() => {
      userCodeAreasReply = new UserCodeAreasReply(raw);
    });

    it('reports the expected values', () => {
      expect(userCodeAreasReply.userCode).toBe('123456');
      expect(userCodeAreasReply.userCodeLength).toBe(4);
      expect(userCodeAreasReply.temperatureMode).toBe('F');
      expect(userCodeAreasReply.userCodeType).toBe(UserCodeType.User);
      expect(userCodeAreasReply.isValidForArea(1)).toBe(true);
      expect(userCodeAreasReply.isValidForArea(2)).toBe(true);
      expect(userCodeAreasReply.isValidForArea(3)).toBe(false);
      expect(userCodeAreasReply.isValidForArea(4)).toBe(false);
      expect(userCodeAreasReply.isValidForArea(5)).toBe(false);
      expect(userCodeAreasReply.isValidForArea(6)).toBe(false);
      expect(userCodeAreasReply.isValidForArea(7)).toBe(true);
      expect(userCodeAreasReply.isValidForArea(8)).toBe(true);
    });
  });
});
