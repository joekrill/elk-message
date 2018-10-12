import ElkResponse from './ElkResponse';

/**
 * Reply Zone Definition Data
 *
 * @see 4.41.2 Reply Zone Definition Data (ZD)
 */
export default class ZoneDefinitionData extends ElkResponse {
  static readonly COMMAND = 'ZD';

  readonly zoneDefinitions: number[];

  constructor(raw: string) {
    super(raw);
    this.zoneDefinitions = Array.from(this.data).map(char => char.charCodeAt(0));
  }

  getZoneDefinition(zoneNumber: number) {
    return this.zoneDefinitions[zoneNumber - 1];
  }
}
