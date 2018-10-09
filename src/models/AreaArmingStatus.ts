import ArmingLevel from '../enums/ArmingLevel';
import ArmUpState from '../enums/ArmUpState';
import AlarmState from '../enums/AlarmState';

export default class AreaArmingStatus {
  constructor(
    readonly area: number,
    readonly armingLevel: ArmingLevel,
    readonly armUpState: ArmUpState,
    readonly alarmState: AlarmState
  ) {}
}
