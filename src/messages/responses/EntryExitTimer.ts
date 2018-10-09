import ElkResponse from './ElkResponse';
import { ArmingLevel } from '../../enums';

/**
 * 4.15.1 Send Entry/Exit Data (EE)
 *
 * This sends the entry 1 & 2 and exit 1 & 2 time data when the timers
 * start by area. When each exit timer expires an “EE” command is also
 * transmitted.
 * M1 Version 4.1.12, 5.1.12 or later.
 * Armed State available in 4.1.18, 5.1.18 or later.
 */
export default class ExntryExitTimer extends ElkResponse {
  static readonly COMMAND = 'EE';

  readonly isEntry: boolean;

  /**
   * Area number where alarm occured
   */
  readonly areaNumber: number;

  readonly timer1: number;
  readonly timer2: number;
  readonly armingLevel: ArmingLevel;

  constructor(raw: string) {
    super(raw);

    this.areaNumber = parseInt(this.data.substr(0, 1), 10);
    this.isEntry = this.data.substr(1, 1) === '1';
    this.timer1 = parseInt(this.data.substr(2, 3), 10);
    this.timer2 = parseInt(this.data.substr(5, 3), 10);
    this.armingLevel = this.data.charCodeAt(8);
  }

  get isExit() {
    return !this.isEntry;
  }
}
