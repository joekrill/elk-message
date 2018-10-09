import DayOfWeek from './DayOfWeek';

describe('DayOfWeek', () => {
  describe('isWeekend', () => {
    it('is true for Saturday', () => {
      expect(DayOfWeek.isWeekend(DayOfWeek.Saturday)).toBe(true);
    });

    it('is true for Sunday', () => {
      expect(DayOfWeek.isWeekend(DayOfWeek.Sunday)).toBe(true);
    });

    it('is false for Monday', () => {
      expect(DayOfWeek.isWeekend(DayOfWeek.Monday)).toBe(false);
    });

    it('is false for Friday', () => {
      expect(DayOfWeek.isWeekend(DayOfWeek.Friday)).toBe(false);
    });
  });

  describe('isWeekday', () => {
    it('is false for ArmedNight', () => {
      expect(DayOfWeek.isWeekday(DayOfWeek.Saturday)).toBe(false);
    });

    it('is false for ArmedNightInstant', () => {
      expect(DayOfWeek.isWeekday(DayOfWeek.Sunday)).toBe(false);
    });

    it('is true for ArmedAway', () => {
      expect(DayOfWeek.isWeekday(DayOfWeek.Monday)).toBe(true);
    });

    it('is true for Disarm', () => {
      expect(DayOfWeek.isWeekday(DayOfWeek.Friday)).toBe(true);
    });
  });
});
