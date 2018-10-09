import SpeakPhrase from './SpeakPhrase';

describe('SpeakPhrase', () => {
  let speakPhrase: SpeakPhrase;

  beforeEach(() => {
    speakPhrase = new SpeakPhrase(123);
  });

  it('generates the expected raw message', () => {
    expect(speakPhrase.raw).toBe('09sp12300BE\r\n');
  });
});
