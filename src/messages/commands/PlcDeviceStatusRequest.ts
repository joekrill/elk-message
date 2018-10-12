import ElkCommand from './ElkCommand';

/**
 * Request PLC status
 *
 * @see 4.25.5 Request PLC status (ps)
 */
export default class PlcDeviceStatusRequest extends ElkCommand {
  constructor(readonly bank: number) {
    super('p', 's', bank.toString());
  }
}
