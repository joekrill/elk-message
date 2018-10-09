import ElkCommand from './ElkCommand';

/**
 * 4.25.7 Toggle PLC Device (pt)
 */
export default class PlcDeviceToggle extends ElkCommand {
  constructor(readonly houseCode: string, readonly unitCode: number) {
    super('p', 't', houseCode + unitCode.toString().padStart(2, '0'));
  }
}
