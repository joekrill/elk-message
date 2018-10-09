import ElkCommand from './ElkCommand';
import ArmingLevel from '../../enums/ArmingLevel';

/**
 * 4.2 Arm and Disarm Messages (a0..a8)
 *
 * Note: Arming the control panel with zones open
 * will initiate “force arming” regardless of whether
 * force arming is enabled or disabled in the control panel.
 */
export default class Arm extends ElkCommand {
  /**
   *
   * @param armingLevel The arming level
   * @param areaNumber The area to arm
   * @param userCode The user code
   */
  constructor(
    readonly armingLevel: ArmingLevel,
    readonly areaNumber: number,
    readonly userCode: string
  ) {
    super('a', String.fromCharCode(armingLevel), areaNumber + userCode.padStart(6, '0'));
  }
}
