import ArmingLevel from './ArmingLevel';

describe('ArmingLevel', () => {
  describe('isAway', () => {
    it('is true for ArmedAway', () => {
      expect(ArmingLevel.isAway(ArmingLevel.ArmedAway)).toBe(true);
    });

    it('is true for ArmedVacation', () => {
      expect(ArmingLevel.isAway(ArmingLevel.ArmedVacation)).toBe(true);
    });

    it('is false for ArmedStay', () => {
      expect(ArmingLevel.isAway(ArmingLevel.ArmedStay)).toBe(false);
    });

    it('is false for Disarm', () => {
      expect(ArmingLevel.isAway(ArmingLevel.Disarm)).toBe(false);
    });
  });

  describe('isNight', () => {
    it('is true for ArmedNight', () => {
      expect(ArmingLevel.isNight(ArmingLevel.ArmedNight)).toBe(true);
    });

    it('is true for ArmedNightInstant', () => {
      expect(ArmingLevel.isNight(ArmingLevel.ArmedNightInstant)).toBe(true);
    });

    it('is false for ArmedAway', () => {
      expect(ArmingLevel.isNight(ArmingLevel.ArmedAway)).toBe(false);
    });

    it('is false for Disarm', () => {
      expect(ArmingLevel.isNight(ArmingLevel.Disarm)).toBe(false);
    });
  });

  describe('isStay', () => {
    it('is true for ArmedNight', () => {
      expect(ArmingLevel.isStay(ArmingLevel.ArmedNight)).toBe(true);
    });

    it('is true for ArmedNightInstant', () => {
      expect(ArmingLevel.isStay(ArmingLevel.ArmedNightInstant)).toBe(true);
    });

    it('is false for ArmedAway', () => {
      expect(ArmingLevel.isStay(ArmingLevel.ArmedAway)).toBe(false);
    });

    it('is false for Disarm', () => {
      expect(ArmingLevel.isStay(ArmingLevel.Disarm)).toBe(false);
    });
  });

  describe('isInstant', () => {
    it('is true for ArmedStayInstant', () => {
      expect(ArmingLevel.isInstant(ArmingLevel.ArmedStayInstant)).toBe(true);
    });

    it('is true for ArmedNightInstant', () => {
      expect(ArmingLevel.isInstant(ArmingLevel.ArmedNightInstant)).toBe(true);
    });

    it('is false for ArmedAway', () => {
      expect(ArmingLevel.isInstant(ArmingLevel.ArmedAway)).toBe(false);
    });

    it('is false for Disarm', () => {
      expect(ArmingLevel.isInstant(ArmingLevel.Disarm)).toBe(false);
    });
  });

  describe('isForce', () => {
    it('is true for ForceArmToAwayMode', () => {
      expect(ArmingLevel.isForce(ArmingLevel.ForceArmToAwayMode)).toBe(true);
    });

    it('is true for ForceArmToStayMode', () => {
      expect(ArmingLevel.isForce(ArmingLevel.ForceArmToStayMode)).toBe(true);
    });

    it('is false for ArmedAway', () => {
      expect(ArmingLevel.isForce(ArmingLevel.ArmedAway)).toBe(false);
    });

    it('is false for Disarm', () => {
      expect(ArmingLevel.isForce(ArmingLevel.Disarm)).toBe(false);
    });
  });

  describe('isVacation', () => {
    it('is true for ArmedVacation', () => {
      expect(ArmingLevel.isVacation(ArmingLevel.ArmedVacation)).toBe(true);
    });

    it('is false for ArmedAway', () => {
      expect(ArmingLevel.isVacation(ArmingLevel.ArmedAway)).toBe(false);
    });

    it('is false for Disarm', () => {
      expect(ArmingLevel.isVacation(ArmingLevel.Disarm)).toBe(false);
    });
  });
});
