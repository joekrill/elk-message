import ElkCommand from './ElkCommand';
import TemperatureDeviceType from '../../enums/TemperatureDeviceType';

/**
 * Request Temperature format
 *
 * This request command allows automation equipment to read
 * temperatures of the temperature probes connected to zones
 * 1 to 16, Keypad temperature from the sensor in each LCD
 * keypad, and Thermostat temperatures. Each Group can have
 * up to 16 temperature sensors.
 *
 * Version 4.2.8 and later sends automatic temperature updates
 * out Port 0 when any temperature device parameter changes.
 *
 * @see 4.31.1 Request Temperature format (st)
 */
export default class TemperatureRequest extends ElkCommand {
  constructor(readonly deviceType: TemperatureDeviceType, readonly deviceNumber: number) {
    super('s', 't', deviceType.toString() + deviceNumber.toString().padStart(2, '0'));
  }
}
