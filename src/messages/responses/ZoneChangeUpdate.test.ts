import ZoneChangeUpdate from './ZoneChangeUpdate';
import ZonePhysicalState from '../../enums/ZonePhysicalState';
import ZoneLogicalState from '../../enums/ZoneLogicalState';

describe('ZoneChangeUpdate', () => {
  describe('parses', () => {
    describe('zone 2 restored to normal EOL', () => {
      const raw = '0AZC002200CE\r\n';
      let zoneChangeUpdate: ZoneChangeUpdate;

      beforeEach(() => {
        zoneChangeUpdate = new ZoneChangeUpdate(raw);
      });

      it('has the expected data', () => {
        expect(zoneChangeUpdate.zoneNumber).toBe(2);
        expect(zoneChangeUpdate.zoneStatus.logicalState).toBe(ZoneLogicalState.Normal);
        expect(zoneChangeUpdate.zoneStatus.physicalState).toBe(ZonePhysicalState.EOL);
      });
    });

    describe('zone 14 change to violated short', () => {
      const raw = '0AZC014B00BB\r\n';
      let zoneChangeUpdate: ZoneChangeUpdate;

      beforeEach(() => {
        zoneChangeUpdate = new ZoneChangeUpdate(raw);
      });

      it('has the expected data', () => {
        expect(zoneChangeUpdate.zoneNumber).toBe(14);
        expect(zoneChangeUpdate.zoneStatus.logicalState).toBe(ZoneLogicalState.Violated);
        expect(zoneChangeUpdate.zoneStatus.physicalState).toBe(ZonePhysicalState.Short);
      });
    });

    describe('zone 25 change to bypassed open', () => {
      const raw = '0AZC025D00B6\r\n';
      let zoneChangeUpdate: ZoneChangeUpdate;

      beforeEach(() => {
        zoneChangeUpdate = new ZoneChangeUpdate(raw);
      });

      it('has the expected data', () => {
        expect(zoneChangeUpdate.zoneNumber).toBe(25);
        expect(zoneChangeUpdate.zoneStatus.logicalState).toBe(ZoneLogicalState.Bypassed);
        expect(zoneChangeUpdate.zoneStatus.physicalState).toBe(ZonePhysicalState.Open);
      });
    });

    describe('zone 114 change to trouble EOL', () => {
      const raw = '0AZC114600C6\r\n';
      let zoneChangeUpdate: ZoneChangeUpdate;

      beforeEach(() => {
        zoneChangeUpdate = new ZoneChangeUpdate(raw);
      });

      it('has the expected data', () => {
        expect(zoneChangeUpdate.zoneNumber).toBe(114);
        expect(zoneChangeUpdate.zoneStatus.logicalState).toBe(ZoneLogicalState.Trouble);
        expect(zoneChangeUpdate.zoneStatus.physicalState).toBe(ZonePhysicalState.EOL);
      });
    });
  });
});
