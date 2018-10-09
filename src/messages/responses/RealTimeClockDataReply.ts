import ElkResponse from './ElkResponse';
import DayOfWeek from '../../enums/DayOfWeek';
import MonthOfYear from '../../enums/MonthOfYear';

/**
 * 4.28.2 Reply Real Time Clock Data (RR)
 */
export default class RealTimeClockDataReply extends ElkResponse {
  static readonly COMMAND = 'RR';

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
