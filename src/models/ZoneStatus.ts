import ZonePhysicalState from '../enums/ZonePhysicalState';
import ZoneLogicalState from '../enums/ZoneLogicalState';

export default class ZoneStatus {
  static parse(hexValue: string) {
    const statusBits = parseInt(hexValue, 16)
      .toString(2)
      .padStart(4, '0');
    const logicalState = parseInt(statusBits.substr(0, 2), 2);
    const physicalState = parseInt(statusBits.substr(2, 2), 2);
    return new ZoneStatus(logicalState, physicalState);
  }

  readonly hexValue: string;

  constructor(readonly logicalState: ZoneLogicalState, readonly physicalState: ZonePhysicalState) {
    this.hexValue = parseInt(
      logicalState.toString(2).padStart(2, '0') + physicalState.toString(2).padStart(2, '0'),
      2
    )
      .toString(16)
      .toUpperCase();
  }
}
