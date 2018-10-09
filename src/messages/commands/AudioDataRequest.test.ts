import AudioDataRequest from './AudioDataRequest';

describe('AudioDataRequest', () => {
  let audioDataRequest: AudioDataRequest;

  describe('for zone 1', () => {
    beforeEach(() => {
      audioDataRequest = new AudioDataRequest(1);
    });

    it('generates the expected raw message', () => {
      expect(audioDataRequest.raw).toBe('08ca010013\r\n');
    });
  });

  describe('for zone 20', () => {
    beforeEach(() => {
      audioDataRequest = new AudioDataRequest(20);
    });

    it('generates the expected raw message', () => {
      expect(audioDataRequest.raw).toBe('08ca200012\r\n');
    });
  });
});
