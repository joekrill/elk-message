import ElkResponse from './ElkResponse';
import ZoneDefinition from '../../enums/ZoneDefinition';

/**
 * 4.5.1 Reply Alarm By Zone Report Data (AZ)
 *
 * @see {AlarmByZoneRequest}
 */
export default class AlarmByZoneReport extends ElkResponse {
  static readonly COMMAND = 'AZ';

  readonly zones: ZoneDefinition[];
  readonly zonesInAlarm: number[];

  constructor(raw: string) {
    super(raw);
    this.zones = Array.from(this.data).map(char => char.charCodeAt(0));
    this.zonesInAlarm = this.zones.reduce((alarmedZones: number[], current, index) => {
      if (current !== ZoneDefinition.Disabled) {
        return [...alarmedZones, index + 1];
      }
      return alarmedZones;
    }, []);
  }

  getZoneAlarm(zoneNumber: number): ZoneDefinition {
    return this.zones[zoneNumber - 1];
  }

  get hasAlarms() {
    return this.zonesInAlarm.length > 0;
  }
}
