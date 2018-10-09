import ElkCommand from './ElkCommand';

/**
 * 4.25.4 Turn ON PLC Device (pn)
 */
export default class PlcDeviceOn extends ElkCommand {
  constructor(readonly houseCode: string, readonly unitCode: number) {
    super('p', 'n', houseCode + unitCode.toString().padStart(2, '0'));
  }
}
