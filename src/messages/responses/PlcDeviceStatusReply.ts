import ElkResponse from './ElkResponse';

/**
 * Returned PLC status
 *
 * @see 4.25.6 Returned PLC status (PS)
 */
export default class PlcDeviceStatusReply extends ElkResponse {
  static readonly COMMAND = 'PS';

  readonly bank: number;
  readonly levels: number[];

  constructor(raw: string) {
    super(raw);

    this.bank = parseInt(this.data[0], 10);
    this.levels = Array.from(this.data.substr(1, 64)).map(value => parseInt(value, 10));
  }
}
