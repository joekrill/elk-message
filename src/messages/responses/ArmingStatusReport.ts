import ElkResponse from './ElkResponse';
import ArmUpState from '../../enums/ArmUpState';
import AlarmState from '../../enums/AlarmState';
import AreaArmingStatus from '../../models/AreaArmingStatus';

/**
 * 4.2.13 Reply Arming Status Report Data (AS)
 *
 * Represents a response from the Elk M1 that includes the arming status
 * for all areas.
 *
 * If the control’s area status changes, this message will be sent if
 * Global Option “Transmit Keypad Keys” is enabled.
 */
export default class ArmingStatusReport extends ElkResponse {
  static readonly COMMAND = 'AS';

  readonly areas: AreaArmingStatus[];

  constructor(raw: string) {
    super(raw);

    const armingLevels = Array.from(this.data.substr(0, 8)).map(char => char.charCodeAt(0));
    const armUpStates = Array.from(this.data.substr(8, 8)).map(char => char.charCodeAt(0));
    const alarmStates = Array.from(this.data.substr(16, 8)).map(char => char.charCodeAt(0));

    this.areas = [1, 2, 3, 4, 5, 6, 7, 8].map(
      (areaNumber, index) =>
        new AreaArmingStatus(
          areaNumber,
          armingLevels[index],
          armUpStates[index],
          alarmStates[index]
        )
    );
  }

  getAreaStatus(areaNumber: number): AreaArmingStatus {
    return this.areas[areaNumber - 1];
  }

  /**
   * If any area has an ArmUpState of `ArmedTimer`, this will return the
   * exit time in seconds; Othwerise, this returns `null`
   */
  get exitTime(): number | null {
    if (
      this.reserved &&
      this.areas.find(areaStatus => areaStatus.armUpState === ArmUpState.ArmedTimer)
    ) {
      return parseInt(this.reserved, 10);
    }

    return null;
  }

  /**
   * If any area has an AlarmState of `EntranceDelayActive` and no ArmUpState of
   * `ArmedTimer`, this will return the entrance time in seconds; Othwerise, this
   * returns `null`.
   */
  get entranceTime(): number | null {
    if (
      this.reserved &&
      this.exitTime === null &&
      this.areas.find(areaStatus => areaStatus.alarmState === AlarmState.EntranceDelayActive)
    ) {
      return parseInt(this.reserved, 10);
    }

    return null;
  }
}
