export default interface ElkMessage {
  readonly raw: string;
  readonly messageType?: string;
  readonly subMessageType?: string;
  readonly data?: string;
}
