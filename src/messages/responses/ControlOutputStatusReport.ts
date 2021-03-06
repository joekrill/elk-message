import ElkResponse from './ElkResponse';

/**
 * Control Output Status Report
 *
 * The control panel sends this message in response
 * to a {@link ControlOutputStatusRequest}. The data portion
 * of this message is 208 characters long, one character
 * for each output in order. The value will be: 0 (Off), 1 (On).
 *
 * @see 4.9.4 Control Output Status Report (CS)
 */
export default class ControlOutputStatusReport extends ElkResponse {
  static readonly COMMAND = 'CS';

  readonly outputStatuses: ReadonlyArray<boolean>;

  constructor(raw: string) {
    super(raw);
    this.outputStatuses = Array.from(this.data).map(char => char === '1');
  }

  isOutputOn(outputNumber: number): boolean {
    return this.outputStatuses[outputNumber - 1];
  }
}
