import VersionNumberReply from './VersionNumberReply';

describe('VersionNumberReply', () => {
  describe('parses', () => {
    const raw = '36VN05010C0103020000000000000000000000000000000000000074\r\n';
    let versionNumberReply: VersionNumberReply;

    beforeEach(() => {
      versionNumberReply = new VersionNumberReply(raw);
    });

    it('has the expected time values', () => {
      expect(versionNumberReply.m1Major).toBe(5);
      expect(versionNumberReply.m1Minor).toBe(1);
      expect(versionNumberReply.m1Patch).toBe(12);
      expect(versionNumberReply.m1Version).toBe('05.01.12');
      expect(versionNumberReply.m1xepMajor).toBe(1);
      expect(versionNumberReply.m1xepMinor).toBe(3);
      expect(versionNumberReply.m1xepPatch).toBe(2);
      expect(versionNumberReply.m1XepVersion).toBe('01.03.02');
    });
  });
});
