import ElkRPConnected from './ElkRPConnected';

describe('ElkRPConnected', () => {
  let elkRpConnected: ElkRPConnected;

  describe('parses', () => {
    describe('disconnected broadcast', () => {
      const raw = '08RP000036\r\n';

      beforeEach(() => {
        elkRpConnected = new ElkRPConnected(raw);
      });

      it('has the expected time values', () => {
        expect(elkRpConnected.isDisconnectBroadcast).toBe(true);
        expect(elkRpConnected.isPollReply).toBe(false);
        expect(elkRpConnected.isInitializing).toBe(false);
      });
    });

    describe('poll reply', () => {
      const raw = '08RP010035\r\n';

      beforeEach(() => {
        elkRpConnected = new ElkRPConnected(raw);
      });

      it('has the expected time values', () => {
        expect(elkRpConnected.isDisconnectBroadcast).toBe(false);
        expect(elkRpConnected.isPollReply).toBe(true);
        expect(elkRpConnected.isInitializing).toBe(false);
      });
    });

    describe('initializing', () => {
      const raw = '08RP020034\r\n';

      beforeEach(() => {
        elkRpConnected = new ElkRPConnected(raw);
      });

      it('has the expected time values', () => {
        expect(elkRpConnected.isDisconnectBroadcast).toBe(false);
        expect(elkRpConnected.isPollReply).toBe(false);
        expect(elkRpConnected.isInitializing).toBe(true);
      });
    });
  });
});
