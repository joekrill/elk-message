import ElkResponse from './ElkResponse';
import ThermostatMode from '../../enums/ThermostatMode';

/**
 * Reply Thermostat Data
 *
 * @see 4.35.2 Reply Thermostat Data (TR)
 */
export default class ThermostatData extends ElkResponse {
  static readonly COMMAND = 'TR';

  readonly thermostatNumber: number;
  readonly thermostatMode: ThermostatMode;
  readonly thermostatHold: boolean;
  readonly thermostatFanOn: boolean;
  readonly temperature?: number;
  readonly heatSetPoint?: number;
  readonly coolSetPoint?: number;
  readonly humidity?: number;

  constructor(raw: string) {
    super(raw);

    this.thermostatNumber = parseInt(this.data.substr(0, 2), 10);
    this.thermostatMode = this.data.charCodeAt(2);
    this.thermostatHold = this.data[3] === '1';
    this.thermostatFanOn = this.data[4] === '1';
    this.temperature = parseInt(this.data.substr(5, 2), 10) || undefined;
    this.heatSetPoint = parseInt(this.data.substr(7, 2), 10) || undefined;
    this.coolSetPoint = parseInt(this.data.substr(9, 2), 10) || undefined;
    this.humidity = parseInt(this.data.substr(11, 2), 10) || undefined;
  }
}
