enum DayOfWeek {
  Sunday = 1,
  Monday = 2,
  Tuesday = 3,
  Wednesday = 4,
  Thursday = 5,
  Friday = 6,
  Saturday = 7
}

namespace DayOfWeek {
  export function isWeekend(dayOfWeek: DayOfWeek) {
    // tslint:disable-next-line:no-unnecessary-qualifier
    return dayOfWeek === DayOfWeek.Saturday || dayOfWeek === DayOfWeek.Sunday;
  }

  export function isWeekday(dayOfWeek: DayOfWeek) {
    return !isWeekend(dayOfWeek);
  }
}

export default DayOfWeek;
