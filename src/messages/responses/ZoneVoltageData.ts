import ElkResponse from './ElkResponse';

/**
 * 4.43.2 Reply Zone Analog Voltage Data (ZV)
 */
export default class ZoneVoltageData extends ElkResponse {
  static readonly COMMAND = 'ZV';

  readonly zoneNumber: number;
  readonly zoneVoltage: number;

  constructor(raw: string) {
    super(raw);
    this.zoneNumber = parseInt(this.data.substr(0, 3), 10);
    this.zoneVoltage = parseInt(this.data.substr(3, 3), 10) / 10;
  }
}
