import AudioCommandIncoming from './AudioCommandIncoming';
import AudioCommand from '../../enums/AudioCommand';

describe('AudioCommandIncoming', () => {
  describe('turn power on', () => {
    const EXPECTED_RAW = '0Fcd01020300000AD\r\n';
    let audioCommandIncoming: AudioCommandIncoming;

    beforeEach(() => {
      audioCommandIncoming = new AudioCommandIncoming(AudioCommand.PowerOn, 2, 3);
    });

    it('generates the expected raw', () => {
      expect(audioCommandIncoming.raw).toBe(EXPECTED_RAW);
    });
  });

  describe('set volume to 40', () => {
    const EXPECTED_RAW = '0Fcd10020305000A8\r\n';
    let audioCommandIncoming: AudioCommandIncoming;

    beforeEach(() => {
      audioCommandIncoming = new AudioCommandIncoming(AudioCommand.VolumeSet, 2, 3, 50);
    });

    it('generates the expected raw', () => {
      expect(audioCommandIncoming.raw).toBe(EXPECTED_RAW);
    });
  });
});
