/**
 * The number of characters used to represent the checksum in a
 * message packet.
 * @see 4.1.6
 */
export const CHECKSUM_WIDTH = 2;

/**
 * The number of characters used to represent the packet length in
 * a message packet.
 * @see 4.1.1
 */
export const PACKET_LENGTH_WIDTH = 2;

/**
 * The default reserved characters for a message packet.
 * @see 4.1.5
 */
export const RESERVED_DEFAULT = '00';

/**
 * The number of characters used to represent the reserved portion of
 * a message packet.
 * @see 4.1.5
 */
export const RESERVED_WIDTH = RESERVED_DEFAULT.length;

/**
 * The message termination characters
 * @see 4.1.7
 */
export const TERMINATOR = '\r\n';
