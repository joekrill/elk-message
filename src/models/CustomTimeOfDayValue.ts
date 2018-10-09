import CustomValueFormat from '../enums/CustomValueFormat';
import CustomValue from './CustomValue';

/**
 * Represents a custom value with the TimeOfDay type.
 */
export default class CustomTimeOfDayValue implements CustomValue {
  static decode(input: string) {
    const decimalValue = parseInt(input, 10);
    const hexValue = decimalValue.toString(16);
    const hour = parseInt(hexValue.substr(0, 2), 16);
    const minutes = parseInt(hexValue.substr(2, 2), 16);
    return new CustomTimeOfDayValue(hour, minutes);
  }

  readonly format = CustomValueFormat.TimeOfDay;

  constructor(readonly hour: number, readonly minutes: number) {}

  encode() {
    const timeInHex =
      this.hour.toString(16).padStart(2, '0') + this.minutes.toString(16).padStart(2, '0');
    return parseInt(timeInHex, 16)
      .toString()
      .padStart(5, '0');
  }
}
