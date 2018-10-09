import EmailSendTrigger from './EmailSendTrigger';

describe('EmailSendTrigger', () => {
  describe('parses', () => {
    const raw = '09EM0010014\r\n';
    let emailSendTrigger: EmailSendTrigger;

    beforeEach(() => {
      emailSendTrigger = new EmailSendTrigger(raw);
    });

    it('has the expected time values', () => {
      expect(emailSendTrigger.emailAddressNumber).toBe(1);
    });
  });
});
