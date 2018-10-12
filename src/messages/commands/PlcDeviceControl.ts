import ElkCommand from './ElkCommand';
import PlcFunctionCode from '../../enums/PlcFunctionCode';

/**
 * Control Any PLC Device
 *
 * @see 4.25.1 Control Any PLC Device (pc)
 */
export default class PlcDeviceControl extends ElkCommand {
  constructor(
    readonly houseCode: string,
    readonly unitCode: number,
    readonly functionCode: PlcFunctionCode,
    readonly extendedCode: number,
    readonly onTime: number
  ) {
    super(
      'p',
      'c',
      houseCode +
        unitCode.toString().padStart(2, '0') +
        functionCode.toString().padStart(2, '0') +
        extendedCode.toString().padStart(2, '0') +
        onTime.toString().padStart(4, '0')
    );
  }
}
