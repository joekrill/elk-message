import ElkResponse from './ElkResponse';

/**
 * Send ASCII String To IP Address
 *
 * It is recommended this response NOT be used.
 *
 * The documentation on this particular "command" is very confusing.
 * Upper-cased commands are supposed to be responses from the M1,
 * but the documentation for this reads as those it's a command that
 * can be sent TO the panel. The example include message packets
 * which aren't even valid (they don't have checksums, the reserved
 * values, and the terminator).
 *
 * So I'm not entirely sure how this is supposed to be implemented.
 * For now it does some minimal parsing as a response message.
 *
 * TODO: Implement correctly?
 *
 * @see 4.3 Send ASCII String To IP Address (AP)
 */
export default class SendASCIIStringToIPAddress extends ElkResponse {
  static readonly COMMAND = 'AP';

  readonly ipAddressNumber: number;
  readonly textData: string;

  constructor(raw: string) {
    super(raw);

    this.ipAddressNumber = parseInt(this.data.substr(0, 1), 10);
    this.textData = this.data.substr(1);
  }
}
