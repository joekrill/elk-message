import ZoneDefinitionData from './ZoneDefinitionData';
import ZoneDefinition from '../../enums/ZoneDefinition';

describe('ZoneDefinitionData', () => {
  describe('parses', () => {
    const raw =
      'D6ZD123456789:;<=>?@ABCDEFGHIJKLMNOPQRST000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000T00CA\r\n';

    let zoneDefinitionData: ZoneDefinitionData;

    beforeEach(() => {
      zoneDefinitionData = new ZoneDefinitionData(raw);
    });

    it('has the expected data', () => {
      expect(zoneDefinitionData.getZoneDefinition(1)).toBe(ZoneDefinition.BurglarEntryExit1);
      expect(zoneDefinitionData.getZoneDefinition(2)).toBe(ZoneDefinition.BurglarEntryExit2);
      expect(zoneDefinitionData.getZoneDefinition(3)).toBe(ZoneDefinition.BurglarPerimeterInstant);
      expect(zoneDefinitionData.getZoneDefinition(4)).toBe(ZoneDefinition.BurglarInterior);
      expect(zoneDefinitionData.getZoneDefinition(5)).toBe(ZoneDefinition.BurglarInteriorFollower);
      expect(zoneDefinitionData.getZoneDefinition(6)).toBe(ZoneDefinition.BurglarInteriorNight);
      expect(zoneDefinitionData.getZoneDefinition(7)).toBe(
        ZoneDefinition.BurglarInteriorNightDelay
      );
      expect(zoneDefinitionData.getZoneDefinition(8)).toBe(ZoneDefinition.Burglar24Hour);
      expect(zoneDefinitionData.getZoneDefinition(9)).toBe(ZoneDefinition.BurglarBoxTamper);
      expect(zoneDefinitionData.getZoneDefinition(10)).toBe(ZoneDefinition.FireAlarm);
      expect(zoneDefinitionData.getZoneDefinition(11)).toBe(ZoneDefinition.FireVerified);
      expect(zoneDefinitionData.getZoneDefinition(12)).toBe(ZoneDefinition.FireSupervisory);
      expect(zoneDefinitionData.getZoneDefinition(13)).toBe(ZoneDefinition.AuxAlarm1);
      expect(zoneDefinitionData.getZoneDefinition(14)).toBe(ZoneDefinition.AuxAlarm2);
      expect(zoneDefinitionData.getZoneDefinition(15)).toBe(ZoneDefinition.Keyfob);
      expect(zoneDefinitionData.getZoneDefinition(16)).toBe(ZoneDefinition.NonAlarm);
      expect(zoneDefinitionData.getZoneDefinition(17)).toBe(ZoneDefinition.CarbonMonoxide);
      expect(zoneDefinitionData.getZoneDefinition(18)).toBe(ZoneDefinition.EmergencyAlarm);
      expect(zoneDefinitionData.getZoneDefinition(19)).toBe(ZoneDefinition.FreezeAlarm);
      expect(zoneDefinitionData.getZoneDefinition(20)).toBe(ZoneDefinition.GasAlarm);
      expect(zoneDefinitionData.getZoneDefinition(21)).toBe(ZoneDefinition.HeatAlarm);
      expect(zoneDefinitionData.getZoneDefinition(22)).toBe(ZoneDefinition.MedicalAlarm);
      expect(zoneDefinitionData.getZoneDefinition(23)).toBe(ZoneDefinition.PoliceAlarm);
      expect(zoneDefinitionData.getZoneDefinition(24)).toBe(ZoneDefinition.PoliceNoIndication);
      expect(zoneDefinitionData.getZoneDefinition(25)).toBe(ZoneDefinition.WaterAlarm);
      expect(zoneDefinitionData.getZoneDefinition(26)).toBe(ZoneDefinition.KeyMomentaryArmDisarm);
      expect(zoneDefinitionData.getZoneDefinition(27)).toBe(ZoneDefinition.KeyMomentaryArmAway);
      expect(zoneDefinitionData.getZoneDefinition(28)).toBe(ZoneDefinition.KeyMomentaryArmStay);
      expect(zoneDefinitionData.getZoneDefinition(29)).toBe(ZoneDefinition.KeyMomentaryDisarm);
      expect(zoneDefinitionData.getZoneDefinition(30)).toBe(ZoneDefinition.KeyOnOff);
      expect(zoneDefinitionData.getZoneDefinition(31)).toBe(ZoneDefinition.MuteAudibles);
      expect(zoneDefinitionData.getZoneDefinition(32)).toBe(ZoneDefinition.PowerSupervisory);
      expect(zoneDefinitionData.getZoneDefinition(33)).toBe(ZoneDefinition.Temperature);
      expect(zoneDefinitionData.getZoneDefinition(34)).toBe(ZoneDefinition.AnalogZone);
      expect(zoneDefinitionData.getZoneDefinition(35)).toBe(ZoneDefinition.PhoneKey);
      expect(zoneDefinitionData.getZoneDefinition(36)).toBe(ZoneDefinition.IntercomKey);
      expect(zoneDefinitionData.getZoneDefinition(37)).toBe(ZoneDefinition.Disabled);
      expect(zoneDefinitionData.getZoneDefinition(38)).toBe(ZoneDefinition.Disabled);
      expect(zoneDefinitionData.getZoneDefinition(208)).toBe(ZoneDefinition.IntercomKey);
    });
  });
});
