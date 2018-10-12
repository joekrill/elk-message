import ElkResponse from './ElkResponse';
import TemperatureDeviceType from '../../enums/TemperatureDeviceType';

/**
 * Reply With Requested Temperature
 *
 * @see 4.31.2 Reply With Requested Temperature (ST)
 */
export default class TemperatureReply extends ElkResponse {
  static readonly COMMAND = 'ST';

  readonly deviceType: TemperatureDeviceType;
  readonly deviceNumber: number;
  readonly temperature: number;

  constructor(raw: string) {
    super(raw);
    this.deviceType = parseInt(this.data.substr(0, 1), 10);
    this.deviceNumber = parseInt(this.data.substr(1, 2), 10);
    this.temperature = parseInt(this.data.substr(3, 3), 10);

    if (this.deviceType === TemperatureDeviceType.TemperatureProbe) {
      this.temperature -= 60;
    } else if (this.deviceType === TemperatureDeviceType.Keypad) {
      this.temperature -= 40;
    }
  }
}
