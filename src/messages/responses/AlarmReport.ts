import ElkResponse from './ElkResponse';

/**
 * Reports an alarm
 *
 * Reporting of alarms through the built on serial port 0 consists of an
 * ASCII string following the same data format of the digital dialer’s
 * Contact ID transmission. Programming one of the telephone numbers with
 * a dialer format set to “Ethernet” will enable the transmissions of the
 * alarm ASCII strings over the RS-232 serial port 0.
 * Available in M1 Version 4.2.8 and after.
 *
 * @see 4.4.1 Alarm Reporting (AR)
 */
export default class AlarmReport extends ElkResponse {
  static readonly COMMAND = 'AR';

  readonly accountNumber: number;

  /**
   * Alarm code
   */
  readonly alarmCode: number;

  /**
   * Area number where alarm occured (1..8)
   */
  readonly areaNumber: number;

  /**
   * Zone/user number (1..208)
   */
  readonly zoneNumber: number;

  /**
   * IP Address nunber to send alarm on. Valid 1 to 8 on M1 Gold,
   * 1 to 4 on M1 Standard and Ez8.
   */
  readonly ipAddressNumber: number;

  constructor(raw: string) {
    super(raw);

    this.accountNumber = parseInt(this.data.substr(0, 6), 10);
    this.alarmCode = parseInt(this.data.substr(6, 4), 10);
    this.areaNumber = parseInt(this.data.substr(10, 2), 10);
    this.zoneNumber = parseInt(this.data.substr(12, 3), 10);
    this.ipAddressNumber = parseInt(this.data.substr(15, 1), 10);
  }
}
