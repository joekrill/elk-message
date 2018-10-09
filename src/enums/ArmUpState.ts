enum ArmUpState {
  NotReadyToArm = 48, // '0',
  ReadyToArm = 49, // '1',
  ReadyToArmForced = 50, // '2',
  ArmedTimer = 51, // '3',
  ArmedFully = 52, // '4',
  ForceArmed = 53, // '5',
  ArmedWithBypass = 54 // '6',
}

export default ArmUpState;
