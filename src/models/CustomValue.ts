import CustomValueFormat from '../enums/CustomValueFormat';

/**
 * Represents a custom value. Custom values may be number,
 * timer, or time of day format. Number and timer types
 * are treated the same; time of day types require special
 * logic for encoding/decoding the hour and minutes parts.
 */
export default interface CustomValue {
  readonly format: CustomValueFormat;
  encode(): string;
}
