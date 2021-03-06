import ElkResponse from './ElkResponse';
import DayOfWeek from '../../enums/DayOfWeek';
import MonthOfYear from '../../enums/MonthOfYear';

/**
 * Ethernet Module Test
 *
 * The “XK” command is automatically sent every 30 seconds. This is
 * done regardless of whether an M1XEP Ethernet Module is present or
 * not. The XK command serves two purposes.
 *  1) It tests to see if a M1XEP Ethernet Module is connected to
 *     the Control.
 *  2) It includes the Control’s real time clock information (current
 *     Date and Time) for general purpose use, including but not limited
 *     to clock synchronization by a third party device.
 *
 * The expected response from a connected M1XEP Ethernet Module is “xk”.
 * However, the Control does not actually care or keep track of a missing
 * “xk” response UNLESS or UNTIL after a M1XEP Ethernet Module has been
 * properly enrolled with the Control. This can be accomplished via the
 * Bus Module Enrollment process (Keypad programming Menu 1) or by the RP
 * software). Once an M1XEP has been enrolled, the Control will now begin
 * tracking each response to an “XK” command, and it will display and log
 * an “Ethernet Trouble” message if an “xk” response is not received
 * within 120 seconds of the “XK” command. This response scenario is also
 * true for alarm reporting commands “AT” and “AR”. Basically, the M1XEP
 * will withhold sending the “xk” response if it should fail to complete
 * an alarm or restoral transmission after 2 attempts. This allows for
 * 1 transmission miss.
 *
 * NOTE: Control Firmware Version 4.32 and after includes the M1’s real
 * time clock information.
 *
 * @see 4.4.5 Ethernet Module Test (XK)
 */
export default class EthernetModuleTest extends ElkResponse {
  static readonly COMMAND = 'XK';

  readonly seconds: number;
  readonly minutes: number;
  readonly hour: number;
  readonly dayOfWeek: DayOfWeek;
  readonly dayOfMonth: number;
  readonly monthOfYear: MonthOfYear;
  readonly year: number;

  /**
   * True if daylight savings time is currently active; Otherwise, false.
   */
  readonly isDst: boolean;

  /**
   * True if the system is using 12-hour clock mode.
   */
  readonly is12hourClockMode: boolean;

  /**
   * True if the date display mode is "dd/mm"; fale if it is "mm/dd"
   */
  readonly isDateModeDayFirst: boolean;

  /**
   * A date object representing the control's realtime clock values.
   */
  readonly date: Date;

  constructor(raw: string) {
    super(raw);

    this.seconds = parseInt(this.data.substr(0, 2), 10);
    this.minutes = parseInt(this.data.substr(2, 2), 10);
    this.hour = parseInt(this.data.substr(4, 2), 10);
    this.dayOfWeek = parseInt(this.data.substr(6, 1), 10);
    this.dayOfMonth = parseInt(this.data.substr(7, 2), 10);
    this.monthOfYear = parseInt(this.data.substr(9, 2), 10);
    this.year = 2000 + parseInt(this.data.substr(11, 2), 10);
    this.isDst = this.data.substr(13, 1) === '1';
    this.is12hourClockMode = this.data.substr(14, 1) === '1';
    this.isDateModeDayFirst = this.data.substr(15, 1) === '1';

    // TODO: What to do with this? I'm not sure we have any way of
    // know which timezone we're dealing with. And it's not UTC.
    this.date = new Date(
      Date.UTC(
        this.year,
        this.monthOfYear - 1, // JavaScript uses 0-based months.
        this.dayOfMonth,
        this.hour,
        this.minutes,
        this.seconds
      )
    );
  }
}
