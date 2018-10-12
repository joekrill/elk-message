import ElkCommand from './ElkCommand';
import TextDescriptionType from '../../enums/TextDescriptionType';

/**
 * Request ASCII String Text Descriptions
 *
 * This request command allows automation equipment to read
 * the text descriptions that are stored in the control.
 *
 * @see 4.29.1 Request ASCII String Text Descriptions (sd)
 */
export default class TextDescriptionRequest extends ElkCommand {
  constructor(readonly textType: TextDescriptionType, readonly address: number) {
    super('s', 'd', textType.toString().padStart(2, '0') + address.toString().padStart(3, '0'));
  }
}
