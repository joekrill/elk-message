import AudioDataReply from './AudioDataReply';
import PartyMode from '../../enums/PartyMode';

describe('AudioDataReply', () => {
  describe('parses', () => {
    const raw = '20CA0110205006004010500000000000C1\r\n';
    let audioDataReply: AudioDataReply;

    beforeEach(() => {
      audioDataReply = new AudioDataReply(raw);
    });

    it('has the expected data', () => {
      expect(audioDataReply.zone).toBe(1);
      expect(audioDataReply.isPowered).toBe(true);
      expect(audioDataReply.source).toBe(2);
      expect(audioDataReply.volume).toBe(50);
      expect(audioDataReply.bass).toBe(60);
      expect(audioDataReply.treble).toBe(40);
      expect(audioDataReply.isLoudness).toBe(true);
      expect(audioDataReply.balance).toBe(50);
      expect(audioDataReply.partyMode).toBe(PartyMode.Off);
      expect(audioDataReply.isDoNotDisturb).toBe(false);
    });
  });
});
