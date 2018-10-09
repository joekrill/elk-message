import CounterValueReply from './CounterValueReply';

describe('CounterValueReply', () => {
  describe('parses', () => {
    const raw = '0DCV0100123003C\r\n';
    let counterValueReply: CounterValueReply;

    beforeEach(() => {
      counterValueReply = new CounterValueReply(raw);
    });

    it('reports the expected values', () => {
      expect(counterValueReply.counterNumber).toBe(1);
      expect(counterValueReply.value).toBe(123);
    });
  });
});
