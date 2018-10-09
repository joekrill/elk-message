import AudioCommandOutgoing from './AudioCommandOutgoing';
import AudioCommand from '../../enums/AudioCommand';

describe('AudioCommandOutgoing', () => {
  describe('parses', () => {
    describe('toggle power', () => {
      const raw = '0FCD02030400000EA\r\n';
      let audioCommandOutgoing: AudioCommandOutgoing;

      beforeEach(() => {
        audioCommandOutgoing = new AudioCommandOutgoing(raw);
      });

      it('has the expected data', () => {
        expect(audioCommandOutgoing.audioCommand).toBe(AudioCommand.PowerToggle);
        expect(audioCommandOutgoing.audioSource).toBe(3);
        expect(audioCommandOutgoing.audioZone).toBe(4);
      });
    });

    describe('toggle mute', () => {
      const raw = '0FCD09030400000E3\r\n';
      let audioCommandOutgoing: AudioCommandOutgoing;

      beforeEach(() => {
        audioCommandOutgoing = new AudioCommandOutgoing(raw);
      });

      it('has the expected data', () => {
        expect(audioCommandOutgoing.audioCommand).toBe(AudioCommand.MuteAudio);
        expect(audioCommandOutgoing.audioSource).toBe(3);
        expect(audioCommandOutgoing.audioZone).toBe(4);
      });
    });
  });
});
