import SystemLogDataReadRequest from './SystemLogDataReadRequest';

describe('SystemLogDataReadRequest', () => {
  let systemLogDataReadRequest: SystemLogDataReadRequest;

  describe('for index 1', () => {
    beforeEach(() => {
      systemLogDataReadRequest = new SystemLogDataReadRequest(1);
    });

    it('generates the expected raw message', () => {
      expect(systemLogDataReadRequest.raw).toBe('09ld00100D6\r\n');
    });
  });

  describe('for index 511', () => {
    beforeEach(() => {
      systemLogDataReadRequest = new SystemLogDataReadRequest(511);
    });

    it('generates the expected raw message', () => {
      expect(systemLogDataReadRequest.raw).toBe('09ld51100D0\r\n');
    });
  });
});
