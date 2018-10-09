import ElkCommand from './ElkCommand';

/**
 * 4.19.5 Request Programming Of Insteon Lighting Device Data (ip)
 */
export default class InsteonLightingDeviceProgramRequest extends ElkCommand {
  constructor(readonly startingDeviceNumber: number, readonly deviceIds: string[]) {
    super(
      'i',
      'p',
      startingDeviceNumber.toString().padStart(3, '0') +
        deviceIds.length.toString() +
        deviceIds.map(id => id.padStart(6, '0')).join('')
    );
  }
}
