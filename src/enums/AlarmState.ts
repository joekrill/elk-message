enum AlarmState {
  None = 48, // '0'
  EntranceDelayActive = 49, // '1'
  AlarmAbortDelayActive = 50, // '2'
  FireAlarm = 51, // '3'
  MedicalAlarm = 52, // '4'
  PoliceAlarm = 53, // '5'
  BurglarAlarm = 54, // '6'
  Aux1Alarm = 55, // '7'
  Aux2Alarm = 56, // '8'
  Aux3Alarm = 57, // '9'
  Aux4Alarm = 58, // ':'
  CarbonMonoxideAlarm = 59, // ';'
  EmergencyAlarm = 60, // '<'
  FreezeAlarm = 61, // '='
  GasAlarm = 62, // '>'
  HeatAlarm = 63, // '?'
  WaterAlarm = 64, // '@'
  FireSupervisory = 65, // 'A'
  VerifyFire = 66 // 'B'
}

namespace AlarmState {
  /**
   * Determines if an AlarmState value indicates an active alarm
   * @param alarmState The AlarmState to check
   * @returns {boolean} True if the value is an active alarm;
   *   Otherwise, false.
   */
  export function isActiveAlarm(alarmState: AlarmState) {
    // tslint:disable-next-line:no-unnecessary-qualifier
    return alarmState > AlarmState.AlarmAbortDelayActive;
  }
}

export default AlarmState;
