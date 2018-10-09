import SpeakWord from './SpeakWord';

describe('SpeakWord', () => {
  let speakWord: SpeakWord;

  beforeEach(() => {
    speakWord = new SpeakWord(123);
  });

  it('generates the expected raw message', () => {
    expect(speakWord.raw).toBe('09sw12300B7\r\n');
  });
});
