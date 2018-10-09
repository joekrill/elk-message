import ElkResponse from './ElkResponse';

const SPLIT_CHUNKS_REGEX = /.{1,3}/g;

/**
 * 4.24.2 Reply Temperature Data (LW)
 */
export default class TemperatureData extends ElkResponse {
  static readonly COMMAND = 'LW';

  readonly keypadTemperatures: number[];
  readonly zoneTemperatures: number[];

  constructor(raw: string) {
    super(raw);

    const keypadMatches = this.data.substr(0, 3 * 16).match(SPLIT_CHUNKS_REGEX);
    const zoneMatches = this.data.substr(3 * 16).match(SPLIT_CHUNKS_REGEX);

    this.keypadTemperatures = keypadMatches
      ? keypadMatches.map(temp => parseInt(temp, 10) - 40)
      : [];
    this.zoneTemperatures = zoneMatches ? zoneMatches.map(temp => parseInt(temp, 10) - 60) : [];
  }

  getKeypadTemperature(keypadNumber: number) {
    return this.keypadTemperatures[keypadNumber - 1];
  }

  getZoneSensorTemperature(zoneNumber: number) {
    return this.zoneTemperatures[zoneNumber - 1];
  }
}
