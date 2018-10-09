import ElkCommand from './ElkCommand';
import TextDescriptionType from '../../enums/TextDescriptionType';

/**
 * 4.29.1 Request ASCII String Text Descriptions (sd)
 *
 * This request command allows automation equipment to read
 * the text descriptions that are stored in the control.
 */
export default class TextDescriptionRequest extends ElkCommand {
  constructor(readonly textType: TextDescriptionType, readonly address: number) {
    super('s', 'd', textType.toString().padStart(2, '0') + address.toString().padStart(3, '0'));
  }
}
