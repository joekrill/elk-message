enum ArmingLevel {
  Disarm = 48, // '0',
  ArmedAway = 49, // '1',
  ArmedStay = 50, // '2',
  ArmedStayInstant = 51, // '3',
  ArmedNight = 52, // '4',
  ArmedNightInstant = 53, // '5',
  ArmedVacation = 54, // '6',
  ArmToNextAwayMode = 55, // '7', // Version 4.2.8 or later
  ArmToNextStayMode = 56, // '8', // Version 4.2.8 or later
  ForceArmToAwayMode = 57, // '9', // Version 5.3.0 or later
  ForceArmToStayMode = 58 // ':', // Version 5.3.0 or later
}

/* tslint:disable:no-unnecessary-qualifier */
namespace ArmingLevel {
  export const AWAY_LEVELS = [
    ArmingLevel.ArmedAway,
    ArmingLevel.ArmedVacation,
    ArmingLevel.ArmToNextAwayMode,
    ArmingLevel.ForceArmToAwayMode
  ];

  export const NIGHT_LEVELS: ReadonlyArray<ArmingLevel> = [
    ArmingLevel.ArmedNight,
    ArmingLevel.ArmedNightInstant
  ];

  export const STAY_LEVELS: ReadonlyArray<ArmingLevel> = [
    ...NIGHT_LEVELS,
    ArmingLevel.ArmedStay,
    ArmingLevel.ArmedStayInstant,
    ArmingLevel.ArmToNextStayMode,
    ArmingLevel.ForceArmToStayMode
  ];

  export const INSTANT_LEVELS: ReadonlyArray<ArmingLevel> = [
    ArmingLevel.ArmedStayInstant,
    ArmingLevel.ArmedNightInstant
  ];

  export const FORCE_LEVELS: ReadonlyArray<ArmingLevel> = [
    ArmingLevel.ForceArmToAwayMode,
    ArmingLevel.ForceArmToStayMode
  ];

  export const VACATION_LEVELS: ReadonlyArray<ArmingLevel> = [ArmingLevel.ArmedVacation];

  export function isAway(armingLevel: ArmingLevel) {
    return AWAY_LEVELS.includes(armingLevel);
  }

  export function isNight(armingLevel: ArmingLevel) {
    return NIGHT_LEVELS.includes(armingLevel);
  }

  export function isStay(armingLevel: ArmingLevel) {
    return STAY_LEVELS.includes(armingLevel);
  }

  export function isInstant(armingLevel: ArmingLevel) {
    return INSTANT_LEVELS.includes(armingLevel);
  }

  export function isForce(armingLevel: ArmingLevel) {
    return FORCE_LEVELS.includes(armingLevel);
  }

  export function isVacation(armingLevel: ArmingLevel) {
    return VACATION_LEVELS.includes(armingLevel);
  }
}

export default ArmingLevel;
