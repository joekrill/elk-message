import ElkResponse from './ElkResponse';

/**
 * 4.25.2 PLC Change Update (PC)
 *
 * Special: When an AllLightsOn, AllLightsOff, or AllUnitsOff
 * command is transmitted the Unit Code will equal 00, and the Level (LL)
 * will be:
 * * AllLightsOn = 02
 * * AllLightsOff = 07
 * * AllUnitsOff = 01
 *
 * This transmission update option transmits the updated status whenever
 * it changes and is enabled by setting the location TRUE in the M1
 * Control Global Programming Location 39.
 * Example: “Xmit Light Chgs– ASCII” (Yes or No)
 */
export default class PlcChangeUpdate extends ElkResponse {
  static readonly COMMAND = 'PC';

  readonly houseCode: string;
  readonly unitCode: number;
  readonly level: number;

  constructor(raw: string) {
    super(raw);
    this.houseCode = this.data[0];
    this.unitCode = parseInt(this.data.substr(1, 2), 10);
    this.level = parseInt(this.data.substr(3, 2), 10);
  }
}
