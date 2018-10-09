import ElkResponse from './ElkResponse';
import CustomValue from '../../models/CustomValue';
import { CustomValueFormat } from '../../enums';
import CustomTimeOfDayValue from '../../models/CustomTimeOfDayValue';
import CustomNumberValue from '../../models/CustomNumberValue';

const SPLIT_ALL_REGEX = /.{1,6}/g;

/**
 * 4.10.3 Reply With Custom Value (CR)
 */
export default class CustomValueReply extends ElkResponse {
  static readonly COMMAND = 'CR';

  static decodeCustomValue(input: string): CustomValue {
    const value = input.substr(0, 5);
    const format = parseInt(input.substr(5, 1), 10);
    return format === CustomValueFormat.TimeOfDay
      ? CustomTimeOfDayValue.decode(value)
      : CustomNumberValue.decode(value, format);
  }

  readonly values: CustomValue[];

  /**
   * If only a single value was returned, this will be the value's number and
   * `values` will contains a single value.
   * If all values were returned, this will be 0 and `values` will contain all 20
   * custom values.
   */
  readonly valueNumber: number;

  constructor(raw: string) {
    super(raw);
    this.valueNumber = parseInt(this.data.substr(0, 2), 10);

    if (this.valueNumber === 0) {
      // ALL values were returned.
      const matches = this.data.substr(2).match(SPLIT_ALL_REGEX);
      this.values = matches
        ? matches.map((chunk, index) => CustomValueReply.decodeCustomValue(chunk.substr(0, 6)))
        : [];
    } else {
      this.values = [CustomValueReply.decodeCustomValue(this.data.substr(2, 6))];
    }
  }

  getCustomValue(valueNumber: number = 1): CustomValue {
    return this.values[valueNumber - 1];
  }
}
