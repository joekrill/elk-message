/**
 * The number of characters used to represent the checksum in a
 * message packet.
 * @see {M1-RS232-ASCII-Protocol} 4.1.6
 */
export const CHECKSUM_WIDTH = 2;

/**
 * The number of characters used to represent the packet length in
 * a message packet.
 * @see {M1-RS232-ASCII-Protocol} 4.1.1
 */
export const PACKET_LENGTH_WIDTH = 2;

/**
 * The default reserved characters for a message packet.
 * @see {M1-RS232-ASCII-Protocol} 4.1.5
 */
export const RESERVED_DEFAULT = '00';

/**
 * The number of characters used to represent the reserved portion of
 * a message packet.
 * @see {M1-RS232-ASCII-Protocol} 4.1.5
 */
export const RESERVED_WIDTH = RESERVED_DEFAULT.length;

/**
 * The message termination characters
 * @see {M1-RS232-ASCII-Protocol} 4.1.7
 */
export const TERMINATOR = '\r\n';

/**
 * The number of characters of the message termination.
 * @see {M1-RS232-ASCII-Protocol} 4.1.7
 */
export const TERMINATOR_WIDTH = TERMINATOR.length;
