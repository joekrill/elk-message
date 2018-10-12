import ElkCommand from './ElkCommand';
import ArmingLevel from '../../enums/ArmingLevel';

/**
 * Arm or disarm an area.
 *
 * Note: Arming the control panel with zones open
 * will initiate “force arming” regardless of whether
 * force arming is enabled or disabled in the control panel.
 *
 * @see 4.2 Arm and Disarm Messages (a0..a8)
 */
export default class Arm extends ElkCommand {
  /**
   * @param armingLevel The arming level desired
   * @param areaNumber The area to be armed or disarmed
   * @param userCode The user code (a string of 4 or 6 digits)
   */
  constructor(
    readonly armingLevel: ArmingLevel,
    readonly areaNumber: number,
    readonly userCode: string
  ) {
    super('a', String.fromCharCode(armingLevel), areaNumber + userCode.padStart(6, '0'));
  }
}
