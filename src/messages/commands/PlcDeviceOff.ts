import ElkCommand from './ElkCommand';

/**
 * Turn OFF PLC Device
 *
 * @see 4.25.3 Turn OFF PLC Device (pf)
 */
export default class PlcDeviceOff extends ElkCommand {
  constructor(readonly houseCode: string, readonly unitCode: number) {
    super('p', 'f', houseCode + unitCode.toString().padStart(2, '0'));
  }
}
