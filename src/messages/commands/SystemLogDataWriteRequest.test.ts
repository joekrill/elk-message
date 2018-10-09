import SystemLogDataWriteRequest from './SystemLogDataWriteRequest';
import LogWriteType from '../../enums/LogWriteType';

describe('SystemLogDataWriteRequest', () => {
  let systemLogDataWriteRequest: SystemLogDataWriteRequest;

  describe('for index 1', () => {
    beforeEach(() => {
      systemLogDataWriteRequest = new SystemLogDataWriteRequest(LogWriteType.Alarm, 1001, 1, 1);
    });

    it('generates the expected raw message', () => {
      expect(systemLogDataWriteRequest.raw).toBe('10le12800100110080\r\n');
    });
  });
});
