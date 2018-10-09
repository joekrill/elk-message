import ElkResponse from './ElkResponse';
import DayOfWeek from '../../enums/DayOfWeek';

/**
 * 4.23 System Log Data Update (LD)
 *
 * As the control log is written, the same information is
 *  sent out the RS-232 port. The log information will have
 * the ddd index value set to “000” to indicate a logging
 * entry.
 *
 * The log data may also be requested with the “ld”
 * (lower case “LD”) command below. Modified in M1 version 4.3.2
 *
 * The “System Log Data Update” transmission option, transmits the
 * updated status whenever it changes and is enabled by setting the
 * location TRUE in the M1 Control Global Programming Locations 35.
 * Example: “Xmit Event Log–ASCII” (Yes or No). The request for log
 * data “ld” is not controlled by this option.
 */
export default class SystemLogDataUpdate extends ElkResponse {
  static readonly COMMAND = 'LD';

  readonly logIndex: number;
  readonly event: number;
  readonly eventNumberData: number;
  readonly areaNumber: number;
  readonly hour: number;
  readonly minutes: number;
  readonly month: number;
  readonly day: number;
  readonly dayOfWeek: DayOfWeek;
  readonly year: number;

  constructor(raw: string) {
    super(raw);
    this.event = parseInt(this.data.substr(0, 4), 10);
    this.eventNumberData = parseInt(this.data.substr(4, 3), 10);
    this.areaNumber = parseInt(this.data.substr(7, 1), 10);
    this.hour = parseInt(this.data.substr(8, 2), 10);
    this.minutes = parseInt(this.data.substr(10, 2), 10);
    this.month = parseInt(this.data.substr(12, 2), 10);
    this.day = parseInt(this.data.substr(14, 2), 10);
    this.logIndex = parseInt(this.data.substr(16, 3), 10);
    this.dayOfWeek = parseInt(this.data.substr(19, 1), 10);
    this.year = 2000 + parseInt(this.data.substr(20, 2), 10);
  }
}
