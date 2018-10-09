import ElkResponse from './ElkResponse';
import SystemTroubleType from '../../enums/SystemTroubleType';

/**
 * 4.30.2 Reply System Trouble Status (SS)
 *
 * This command allows automation equipment to poll
 * for system trouble status. Firmware revision 4.5.4,
 * 5.1.4 and after. This message will automatically
 * be sent upon a trouble status change.
 */
export default class SystemTroubleStatusReply extends ElkResponse {
  static readonly COMMAND = 'SS';

  readonly troubles: SystemTroubleType = SystemTroubleType.None;
  readonly boxTamperTroubleZone?: number;
  readonly transmitterLowBatteryTroubleZone?: number;
  readonly securityAlertTroubleZone?: number;
  readonly lostTransmitterTroubleZone?: number;
  readonly fireTroubleZone?: number;

  constructor(raw: string) {
    super(raw);

    if (this.data[0] === '1') {
      this.troubles |= SystemTroubleType.ACFail;
    }

    if (this.data[1] !== '0') {
      this.troubles |= SystemTroubleType.BoxTamper;
      this.boxTamperTroubleZone = this.data.charCodeAt(1) - 48;
    }

    if (this.data[2] === '1') {
      this.troubles |= SystemTroubleType.FailToCommunicate;
    }

    if (this.data[3] === '1') {
      this.troubles |= SystemTroubleType.EEPromMemoryError;
    }

    if (this.data[4] === '1') {
      this.troubles |= SystemTroubleType.LowBatteryControl;
    }

    if (this.data[5] !== '0') {
      this.troubles |= SystemTroubleType.TransmitterLowBattery;
      this.transmitterLowBatteryTroubleZone = this.data.charCodeAt(5) - 48;
    }

    if (this.data[6] === '1') {
      this.troubles |= SystemTroubleType.OverCurrent;
    }

    if (this.data[7] === '1') {
      this.troubles |= SystemTroubleType.TelephoneFault;
    }

    if (this.data[9] === '1') {
      this.troubles |= SystemTroubleType.Output2;
    }

    if (this.data[10] === '1') {
      this.troubles |= SystemTroubleType.MissingKeypad;
    }

    if (this.data[11] === '1') {
      this.troubles |= SystemTroubleType.ZoneExpander;
    }

    if (this.data[12] === '1') {
      this.troubles |= SystemTroubleType.OutputExpander;
    }

    if (this.data[14] === '1') {
      this.troubles |= SystemTroubleType.ELKRPRemoteAccess;
    }

    if (this.data[16] === '1') {
      this.troubles |= SystemTroubleType.CommonAreaNotArmed;
    }

    if (this.data[17] === '1') {
      this.troubles |= SystemTroubleType.FlashMemoryError;
    }

    if (this.data[18] !== '0') {
      this.troubles |= SystemTroubleType.SecurityAlert;
      this.securityAlertTroubleZone = this.data.charCodeAt(18) - 48;
    }

    if (this.data[19] === '1') {
      this.troubles |= SystemTroubleType.SerialPortExpander;
    }

    if (this.data[20] !== '0') {
      this.troubles |= SystemTroubleType.LostTransmitter;
      this.lostTransmitterTroubleZone = this.data.charCodeAt(20) - 48;
    }

    if (this.data[21] === '1') {
      this.troubles |= SystemTroubleType.GESmokeCleanMe;
    }

    if (this.data[22] === '1') {
      this.troubles |= SystemTroubleType.EthernetTrouble;
    }

    if (this.data[31] === '1') {
      this.troubles |= SystemTroubleType.DisplayMessageInKeypadLine1;
    }

    if (this.data[32] === '1') {
      this.troubles |= SystemTroubleType.DisplayMessageInKeypadLine2;
    }

    if (this.data[33] !== '0') {
      this.troubles |= SystemTroubleType.FireTrouble;
      this.fireTroubleZone = this.data.charCodeAt(33) - 48;
    }
  }
}
