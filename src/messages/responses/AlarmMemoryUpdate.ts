import ElkResponse from './ElkResponse';

/**
 * 4.38 Alarm Memory Update (AM)
 */
export default class AlarmMemoryUpdate extends ElkResponse {
  static readonly COMMAND = 'AM';

  readonly areas: boolean[];

  constructor(raw: string) {
    super(raw);
    this.areas = Array.from(this.data.substr(0, 8)).map(char => char === '1');
  }

  isAlarmMemoryPresent(areaNumber: number) {
    return this.areas[areaNumber - 1];
  }
}
