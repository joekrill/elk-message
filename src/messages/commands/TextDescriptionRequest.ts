import ElkCommand from './ElkCommand';
import TextDescriptionType from '../../enums/TextDescriptionType';

/**
 * Request ASCII String Text Descriptions
 *
 * This request command allows automation equipment to read
 * the text descriptions that are stored in the control.
 *
 * The control will response with a {@link TextDescriptionResponse}.
 *
 * NOTE! The {@link TextDescriptionResponse} may not be for the
 * `address` requested! If there is no description for the requested
 * address the next addresses will be searched until one with a
 * description is found (or, if none are found, an address of `0` will
 * be returned).
 *
 * From the protocol specification:
 * > If the first character in a requested name is a “space” or less,
 * > then the next names are searched until a name is found whose first
 * > character is greater than “space” or the “Show On Keypad” bit is
 * > set. If no valid names are found, a “000” for the NNN address is
 * > returned. This speeds up the loading of names so that invalid
 * > names are not returned. M1 version 2.4.6 or later.
 *
 * @see 4.29.1 Request ASCII String Text Descriptions (sd)
 */
export default class TextDescriptionRequest extends ElkCommand {
  constructor(readonly textType: TextDescriptionType, readonly address: number) {
    super('s', 'd', textType.toString().padStart(2, '0') + address.toString().padStart(3, '0'));
  }
}
