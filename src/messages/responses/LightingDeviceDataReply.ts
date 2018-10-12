import ElkResponse from './ElkResponse';

/**
 * Reply Lighting Device Status Data
 *
 * @see 4.14.2 Reply Lighting Device Status Data (DS)
 */
export default class LightingDeviceDataReply extends ElkResponse {
  static readonly COMMAND = 'DS';

  /**
   * The lighting device number (1..256)
   */
  readonly lightingDeviceNumber: number;

  /**
   * The lighting level, 0..100, where 0 = off, 100 = full on, and
   * anything in between is the dim level.
   * NOTE: this is different than what the M1 returns, which will
   * return a `1` for full on.
   */
  readonly lightingLevel: number;

  constructor(raw: string) {
    super(raw);
    this.lightingDeviceNumber = parseInt(this.data.substr(0, 3), 10);
    this.lightingLevel = parseInt(this.data.substr(3, 2), 10);

    if (this.lightingLevel === 1) {
      this.lightingLevel = 100;
    }
  }
}
