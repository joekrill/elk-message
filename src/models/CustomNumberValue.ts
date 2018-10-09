import CustomValueFormat from '../enums/CustomValueFormat';
import CustomValue from './CustomValue';

/**
 * Represents a custom value of Number or Timer type.
 */
export default class CustomNumberValue implements CustomValue {
  static decode(input: string, format: CustomValueFormat) {
    const decimalValue = parseInt(input, 10);
    return new CustomNumberValue(decimalValue, format);
  }

  constructor(
    readonly value: number,
    readonly format: CustomValueFormat = CustomValueFormat.Number
  ) {
    if (format === CustomValueFormat.TimeOfDay) {
      throw new Error(
        'CustomNumberValue format must be Number or Timer. Use CustomTimeOfDayValue for TimeOfDay format.'
      );
    }
  }

  encode() {
    return this.value.toString().padStart(5, '0');
  }
}
