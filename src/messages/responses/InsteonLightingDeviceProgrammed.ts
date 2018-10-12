import ElkResponse from './ElkResponse';

/**
 * Reply Programming Of Insteon Lighting Device Data
 *
 * Note: Insteon Lighting Device 193 to 256 corresponds to
 * Insteon Groups 1 – 64.
 *
 * @see 4.44 Reply Programming Of Insteon Lighting Device Data (IP)
 */
export default class InsteonLightingDeviceProgrammed extends ElkResponse {
  static readonly COMMAND = 'IP';

  readonly startingDeviceNumber: number;
  readonly deviceCount: number;

  constructor(raw: string) {
    super(raw);

    this.startingDeviceNumber = parseInt(this.data.substr(0, 3), 10);
    this.deviceCount = parseInt(this.data.substr(3, 1), 10);
  }

  get endingDeviceNumber() {
    return this.startingDeviceNumber + this.deviceCount - 1;
  }
}
