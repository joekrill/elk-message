import ElkResponse from './ElkResponse';

/**
 * This message is used to inform User Interfaces that an alarm
 * memory is present and must be cleared before an arm command will arm the system.
 *
 * @see 4.38 Alarm Memory Update (AM)
 */
export default class AlarmMemoryUpdate extends ElkResponse {
  static readonly COMMAND = 'AM';

  /**
   * An array containing the alarm memory status of each area.
   * If the value is true, there is an alarm memory present for
   * the area. Index 0 indicates area 1's alarm memory status,
   * index 1 indicates area 2's alarm memory status, etc.
   */
  readonly areas: boolean[];

  constructor(raw: string) {
    super(raw);

    // The alarm memory response uses the reserved characters as
    // part of it's data (or depending on how you look at it,
    // doesn't *have* the reserved characters.
    const data = this.data + this.reserved;
    this.areas = Array.from(data.substr(0, 8)).map(char => char === '1');
  }

  /**
   * Returns a value indicating whether there is an alarm memory
   * present in the given area.
   * @param areaNumber The area number (1..8)
   */
  isAlarmMemoryPresent(areaNumber: number) {
    return this.areas[areaNumber - 1];
  }
}
