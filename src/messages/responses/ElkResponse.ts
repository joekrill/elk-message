import ElkMessage from '../ElkMessage';
import { CHECKSUM_WIDTH, PACKET_LENGTH_WIDTH, RESERVED_WIDTH, TERMINATOR } from '../constants';
import calculateChecksum from '../../util/calculateChecksum';
import numberToHex from '../../util/numberToHex';

/**
 * A regex expression that parses a raw message packet and captures:
 * 1. Packet length
 * 2. Message type
 * 3. Sub-message type
 * 4. Data
 * 5. Reserved
 * 6. Checksum
 * 7. Terminator
 */
const PACKET_REGEX = new RegExp(
  `^(\\S{${PACKET_LENGTH_WIDTH}})(\\S)(\\S)(.*)(\\S{${RESERVED_WIDTH}})(\\S{${CHECKSUM_WIDTH}})(${TERMINATOR}|${
    TERMINATOR[0]
  }|${TERMINATOR[1]})$`
);

/**
 * A message that is received from the Elk M1
 */
export default class ElkResponse implements ElkMessage {
  readonly isWellFormed: boolean = false;
  readonly isChecksumValid: boolean = false;
  readonly isPacketLengthValid: boolean = false;

  readonly messageType?: string;
  readonly subMessageType?: string;
  readonly data: string = '';
  readonly reserved?: string;
  readonly checksum?: string;
  readonly terminator?: string;
  readonly expectedChecksum?: string;
  readonly packetLength?: string;
  readonly expectedPacketLength?: string;

  constructor(readonly raw: string) {
    const result = PACKET_REGEX.exec(raw);
    this.isWellFormed = !!result;

    if (result) {
      this.packetLength = result[1];
      this.messageType = result[2];
      this.subMessageType = result[3];
      this.data = result[4];
      this.reserved = result[5];
      this.checksum = result[6];
      this.terminator = result[7];

      this.expectedPacketLength = numberToHex(
        raw.length - PACKET_LENGTH_WIDTH - this.terminator.length,
        PACKET_LENGTH_WIDTH
      );
      this.expectedChecksum = calculateChecksum(
        raw.substring(0, raw.length - CHECKSUM_WIDTH - this.terminator.length)
      );

      this.isChecksumValid = this.checksum === this.expectedChecksum;
      this.isPacketLengthValid = this.packetLength === this.expectedPacketLength;
    }
  }

  get command(): string | null {
    if (!this.messageType || !this.subMessageType) {
      return null;
    }

    return this.messageType[0] + this.subMessageType[0];
  }
}
