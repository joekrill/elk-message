import SystemTroubleStatusReply from './SystemTroubleStatusReply';
import SystemTroubleType from '../../enums/SystemTroubleType';

describe('SystemTroubleStatusReply', () => {
  describe('parses', () => {
    describe('AC Trouble', () => {
      const raw = '28SS1000000000000000000000000000000000002F\r\n';
      let systemTroubleStatusReply: SystemTroubleStatusReply;

      beforeEach(() => {
        systemTroubleStatusReply = new SystemTroubleStatusReply(raw);
      });

      it('has the expected time values', () => {
        expect(systemTroubleStatusReply.troubles).toBe(SystemTroubleType.ACFail);
        expect(systemTroubleStatusReply.boxTamperTroubleZone).toBeUndefined();
        expect(systemTroubleStatusReply.transmitterLowBatteryTroubleZone).toBeUndefined();
        expect(systemTroubleStatusReply.securityAlertTroubleZone).toBeUndefined();
        expect(systemTroubleStatusReply.lostTransmitterTroubleZone).toBeUndefined();
        expect(systemTroubleStatusReply.fireTroubleZone).toBeUndefined();
      });
    });

    describe('AC Trouble', () => {
      const raw = '28SS000000000100000000000000000000010A001D\r\n';
      let systemTroubleStatusReply: SystemTroubleStatusReply;

      beforeEach(() => {
        systemTroubleStatusReply = new SystemTroubleStatusReply(raw);
      });

      it('has the expected time values', () => {
        expect(systemTroubleStatusReply.troubles).toBe(
          SystemTroubleType.Output2 |
            SystemTroubleType.DisplayMessageInKeypadLine1 |
            SystemTroubleType.FireTrouble
        );
        expect(systemTroubleStatusReply.boxTamperTroubleZone).toBeUndefined();
        expect(systemTroubleStatusReply.transmitterLowBatteryTroubleZone).toBeUndefined();
        expect(systemTroubleStatusReply.securityAlertTroubleZone).toBeUndefined();
        expect(systemTroubleStatusReply.lostTransmitterTroubleZone).toBeUndefined();
        expect(systemTroubleStatusReply.fireTroubleZone).toBe(17);
      });
    });

    describe('Trouble everywhere', () => {
      const raw = '28SS171119111111111111f1k111111111111A001D\r\n';
      let systemTroubleStatusReply: SystemTroubleStatusReply;

      beforeEach(() => {
        systemTroubleStatusReply = new SystemTroubleStatusReply(raw);
      });

      it('has the expected time values', () => {
        expect(systemTroubleStatusReply.troubles).toBe(
          SystemTroubleType.ACFail |
            SystemTroubleType.BoxTamper |
            SystemTroubleType.FailToCommunicate |
            SystemTroubleType.EEPromMemoryError |
            SystemTroubleType.LowBatteryControl |
            SystemTroubleType.TransmitterLowBattery |
            SystemTroubleType.OverCurrent |
            SystemTroubleType.TelephoneFault |
            SystemTroubleType.Output2 |
            SystemTroubleType.MissingKeypad |
            SystemTroubleType.ZoneExpander |
            SystemTroubleType.OutputExpander |
            SystemTroubleType.ELKRPRemoteAccess |
            SystemTroubleType.CommonAreaNotArmed |
            SystemTroubleType.FlashMemoryError |
            SystemTroubleType.SecurityAlert |
            SystemTroubleType.SerialPortExpander |
            SystemTroubleType.LostTransmitter |
            SystemTroubleType.GESmokeCleanMe |
            SystemTroubleType.EthernetTrouble |
            SystemTroubleType.DisplayMessageInKeypadLine1 |
            SystemTroubleType.DisplayMessageInKeypadLine2 |
            SystemTroubleType.FireTrouble
        );
        expect(systemTroubleStatusReply.boxTamperTroubleZone).toBe(7);
        expect(systemTroubleStatusReply.transmitterLowBatteryTroubleZone).toBe(9);
        expect(systemTroubleStatusReply.securityAlertTroubleZone).toBe(54);
        expect(systemTroubleStatusReply.lostTransmitterTroubleZone).toBe(59);
        expect(systemTroubleStatusReply.fireTroubleZone).toBe(17);
      });
    });
  });
});
