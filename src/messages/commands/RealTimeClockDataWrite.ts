import ElkCommand from './ElkCommand';
import DayOfWeek from '../../enums/DayOfWeek';
import MonthOfYear from '../../enums/MonthOfYear';

/**
 * Write Real Time Clock Data
 *
 * @see 4.28.3 Write Real Time Clock Data (rw)
 */
export default class RealTimeClockDataWrite extends ElkCommand {
  constructor(
    readonly year: number,
    readonly month: MonthOfYear,
    readonly day: number,
    readonly dayOfWeek: DayOfWeek,
    readonly hour: number,
    readonly minutes: number,
    readonly seconds: number
  ) {
    super(
      'r',
      'w',
      seconds.toString().padStart(2, '0') +
        minutes.toString().padStart(2, '0') +
        hour.toString().padStart(2, '0') +
        dayOfWeek.toString() +
        day.toString().padStart(2, '0') +
        month.toString().padStart(2, '0') +
        year
          .toString()
          .padStart(2, '0')
          .substr(-2)
    );
  }
}
