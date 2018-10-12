import ElkResponse from './ElkResponse';

/**
 * Reply With Bypassed Zone State
 *
 * @see 4.40.2 Reply With Bypassed Zone State (ZB)
 */
export default class ZoneBypassReply extends ElkResponse {
  static readonly COMMAND = 'ZB';

  readonly zoneNumber: number;
  readonly isBypassed: boolean;

  constructor(raw: string) {
    super(raw);
    this.zoneNumber = parseInt(this.data.substr(0, 3), 10);
    this.isBypassed = this.data[3] === '1';
  }
}
