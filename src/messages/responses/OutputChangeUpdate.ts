import ElkResponse from './ElkResponse';

/**
 * 4.7 Output Change Update (CC)
 *
 * This transmission update option transmits the updated status whenever
 * it changes and is enabled by setting the location TRUE in the M1 Control
 * Global Programming Locations 37.
 * Example: “Xmit OutputChgs–ASCII” (Yes or No)
 *
 * The Output Change Update will also be transmitted out M1XSP Serial Port
 * Expanders that are configured in the Generic Mode.
 */
export default class OutputChangeUpdate extends ElkResponse {
  static readonly COMMAND = 'CC';

  readonly outputNumber: number;
  readonly isOn: boolean;

  constructor(raw: string) {
    super(raw);
    this.outputNumber = parseInt(this.data.substr(0, 3), 10);
    this.isOn = this.data.substr(3, 1) === '1';
  }
}
