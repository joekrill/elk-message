import EntryExitTimer from './EntryExitTimer';
import { ArmingLevel } from '../../enums';

describe('EntryExitTimer', () => {
  describe('parses', () => {
    describe('exit timer', () => {
      const raw = '0FEE10060120100E5\r\n';
      let entryExitTimer: EntryExitTimer;

      beforeEach(() => {
        entryExitTimer = new EntryExitTimer(raw);
      });

      it('has the expected time values', () => {
        expect(entryExitTimer.areaNumber).toBe(1);
        expect(entryExitTimer.isExit).toBe(true);
        expect(entryExitTimer.timer1).toBe(60);
        expect(entryExitTimer.timer2).toBe(120);
        expect(entryExitTimer.armingLevel).toBe(ArmingLevel.ArmedAway);
      });
    });

    describe('entry timer', () => {
      const raw = '0FEE21030254200DD\r\n';
      let entryExitTimer: EntryExitTimer;

      beforeEach(() => {
        entryExitTimer = new EntryExitTimer(raw);
      });

      it('has the expected time values', () => {
        expect(entryExitTimer.areaNumber).toBe(2);
        expect(entryExitTimer.isEntry).toBe(true);
        expect(entryExitTimer.timer1).toBe(30);
        expect(entryExitTimer.timer2).toBe(254);
        expect(entryExitTimer.armingLevel).toBe(ArmingLevel.ArmedStay);
      });
    });
  });
});
