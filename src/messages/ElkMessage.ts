export default interface ElkMessage {
  /**
   * The raw ASCII data packet for this message.
   *
   * Most packets both to and from the control panel use the following
   * format:
   *
   * > `NNMSD...OO CC (CR-LF)`
   *
   * * `NN` is the length of the packet including all characters except
   *   Length and CR-LF at the end of the packet. Legal values are ASCII
   *   hex 00 to FF. Permissible characters are ASCII 0-9 and upper case
   *   A-F.
   * * `M` Message/packet type ID. These are upper and lower case alpha
   *   characters.
   *   Upper case is used for responses from the control panel and lower
   *   case for commands to the control panel. Allowed values are a-z and
   *   A-Z
   * * `S` Sub-message/packet type. These are upper and lower case alpha
   *   characters. Upper case is used for responses from the control panel
   *   and lower case for commands to the control panel. Allowed values are
   *   0-9, a-z and A-Z.
   * * `D...` 0 or more ASCII characters of data associated with the
   *   command/packet type. Any printable ASCII character is permitted.
   * * `00` Reserved for future development. The documentation indicates
   *   that "The only currently legal character is 0 (ASCII zero)" - and while
   *   this is _mostly_ true, there are some cases where the reserved
   *   characters are used (i.e. {@link ArmingStatusReport} and
   *   {@link UserCodeChangeReply} and cases where it is not part of the
   *   packet at all ({@link AlarmMemoryUpdate}).
   * * `CC` 2-digit checksum. This is the hexadecimal two’s complement of the
   *   modulo-256 sum of the ASCII values of all characters in the message
   *   excluding the checksum itself and the CR-LF terminator at the end of
   *   the message. Permissible characters are ASCII 0-9 and upper case A-F.
   *   When all the characters are added to the Checksum, the value should
   *   equal 0.
   * * `(CR-LF)` Message terminator. Either CR or LF, or both CR-LF.
   *
   * The `M` and `S` value combined are generally referred to as the "command".
   *
   * @see [Elk M1 RS232 Protocol Specification, Section 4](media://ELK-M1_RS232_PROTOCOL_Ver_1.84.pdf)
   */
  readonly raw: string;

  /**
   * A single character indicating the message type. Upper case characters
   * indicate a response from the control panel, lower case characters
   * indicate a command sent to the control panel.
   */
  readonly messageType?: string;

  /**
   * A single character indicating the sub-message type. Upper case characters
   * indicate a response from the control panel, lower case characters
   * indicate a command sent to the control panel.
   */
  readonly subMessageType?: string;

  /**
   * An optional string of data associated with the message.
   */
  readonly data?: string;

  /**
   * The two reserved characters (usually "00")
   * @see {@link RESERVED_DEFAULT}
   */
  readonly reserved?: string;
}
