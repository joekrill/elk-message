import ElkResponse from './ElkResponse';
import TextDescriptionType from '../../enums/TextDescriptionType';

/**
 * Reply With ASCII String Text Descriptions
 *
 * Sent as a response to {@link TextDescriptionRequest}
 *
 * @see 4.29.2 Reply With ASCII String Text Descriptions (SD)
 */
export default class TextDescriptionReply extends ElkResponse {
  static readonly COMMAND = 'SD';

  readonly textType: TextDescriptionType;
  readonly address: number;
  readonly text: string;

  constructor(raw: string) {
    super(raw);
    this.textType = parseInt(this.data.substr(0, 2), 10);
    this.address = parseInt(this.data.substr(2, 3), 10);
    this.text = this.data.substr(5, 16).trim();

    if (this.text.charCodeAt(0) > 127) {
      // Note: The high bit of the first character in the text string may be set as the
      // “Show On Keypad” bit. Mask out the high bit for proper ASCII display.
      this.text = String.fromCharCode(this.text.charCodeAt(0) - 128) + this.text.substr(1);
    }
  }
}
