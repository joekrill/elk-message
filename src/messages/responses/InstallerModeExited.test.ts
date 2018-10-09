import InstallerModeExited from './InstallerModeExited';

describe('InstallerModeExited', () => {
  describe('parses', () => {
    const raw = '06IE00AC\r\n';
    let installerModeExited: InstallerModeExited;

    beforeEach(() => {
      installerModeExited = new InstallerModeExited(raw);
    });

    it('has the expected time values', () => {
      expect(installerModeExited.isChecksumValid).toBe(true);
      expect(installerModeExited.isPacketLengthValid).toBe(true);
      expect(installerModeExited.isWellFormed).toBe(true);
    });
  });
});
