import ElkMessage from '../ElkMessage';
import numberToHex from '../../util/numberToHex';
import calculateChecksum from '../../util/calculateChecksum';
import { PACKET_LENGTH_WIDTH, RESERVED_DEFAULT, TERMINATOR } from '../constants';

/**
 * A message that is sent to the Elk M1
 */
export default abstract class ElkCommand implements ElkMessage {
  constructor(
    readonly messageType: string,
    readonly subMessageType: string,
    readonly data: string = ''
  ) {}

  get raw(): string {
    const message = `${this.command}${this.data || ''}${this.reserved || RESERVED_DEFAULT}`;
    const packetLength = numberToHex(message.length + 2, PACKET_LENGTH_WIDTH);
    const checksum = calculateChecksum(`${packetLength}${message}`);
    return `${packetLength}${message}${checksum}${TERMINATOR}`;
  }

  get command(): string {
    return this.messageType + this.subMessageType;
  }

  get reserved(): string {
    return RESERVED_DEFAULT;
  }
}
