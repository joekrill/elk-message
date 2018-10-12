import ElkResponse from './ElkResponse';

const SPLIT_DEVICE_IDS_REGEX = /.{1,6}/g;

/**
 * Reply Read Of Insteon Lighting Device Data
 *
 * @see 4.19.4 Reply Read Of Insteon Lighting Device Data (IR)
 */
export default class InsteonLightingDeviceStatusReply extends ElkResponse {
  static readonly COMMAND = 'IR';

  readonly startingDeviceNumber: number;
  readonly deviceCount: number;
  readonly deviceIds: string[];

  constructor(raw: string) {
    super(raw);

    this.startingDeviceNumber = parseInt(this.data.substr(0, 3), 10);
    this.deviceCount = parseInt(this.data.substr(3, 1), 10);
    this.deviceIds = this.data.substr(4).match(SPLIT_DEVICE_IDS_REGEX) || [];
  }

  get endingDeviceNumber() {
    return this.startingDeviceNumber + this.deviceCount - 1;
  }
}
