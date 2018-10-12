import ElkResponse from './ElkResponse';

/**
 * Tasks Change Update
 *
 * This transmission update option transmits the updated status whenever
 * it changes and is enabled by setting the location TRUE in the M1 Control
 * Global Programming Location 38. Example: “Xmit Task Chgs – ASCII” (Yes
 * or No)
 *
 * @see 4.33 Tasks Change Update (TC)
 */
export default class TaskChangeUpdate extends ElkResponse {
  static readonly COMMAND = 'TC';

  readonly taskNNumber: number;

  constructor(raw: string) {
    super(raw);
    this.taskNNumber = parseInt(this.data.substr(0, 3), 10);
  }
}
