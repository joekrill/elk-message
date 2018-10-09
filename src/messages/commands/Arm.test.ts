import Arm from './Arm';
import ArmingLevel from '../../enums/ArmingLevel';

describe('Arm', () => {
  const EXAMPLES: { [index: string]: [ArmingLevel, number, string, string] } = {
    Disarm: [ArmingLevel.Disarm, 1, '3456', '0Da010034560038\r\n'],
    'Arm to Away': [ArmingLevel.ArmedAway, 1, '1234', '0Da11001234003F\r\n'],
    'Arm to Stay': [ArmingLevel.ArmedStay, 3, '5678', '0Da23005678002C\r\n'],
    'Arm to Stay Instant': [ArmingLevel.ArmedStayInstant, 8, '5678', '0Da380056780026\r\n'],
    'Arm to Night': [ArmingLevel.ArmedNight, 8, '5678', '0Da480056780025\r\n'],
    'Arm to Night Instant': [ArmingLevel.ArmedNightInstant, 8, '5678', '0Da580056780024\r\n'],
    'Arm to Vacation': [ArmingLevel.ArmedVacation, 8, '5678', '0Da680056780023\r\n']
  };

  Object.keys(EXAMPLES).forEach(exampleName => {
    describe(exampleName, () => {
      let arm: Arm;
      const [level, area, code, expectedRaw] = EXAMPLES[exampleName];

      beforeEach(() => {
        arm = new Arm(level, area, code);
      });

      it('Generates the expected raw', () => {
        expect(arm.raw).toBe(expectedRaw);
      });
    });
  });
});
