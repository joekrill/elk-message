import ElkResponse from './ElkResponse';

/**
 * ELKRP software Connected
 *
 * The M1XEP sends the following ASCII command out to
 * all socket connected devices when ELK RP,
 * Upload/Download Software, disconnects from the M1
 *
 * @see 4.27 ELKRP Connected (RP)
 */
export default class ElkRPConnected extends ElkResponse {
  static readonly COMMAND = 'RP';

  readonly connectMessageType: string;

  constructor(raw: string) {
    super(raw);

    this.connectMessageType = this.data[1];
  }

  get isDisconnectBroadcast() {
    return this.connectMessageType === '0';
  }

  get isPollReply() {
    return this.connectMessageType === '1';
  }

  get isInitializing() {
    return this.connectMessageType === '2';
  }
}
