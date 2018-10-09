import ElkCommand from './ElkCommand';

/**
 * 4.19.3 Request Read Of Insteon Lighting Device Data (ir)
 *
 * This command allows the M1 to poll single light devices to obtain
 * their on, off, dim status. This will be an automatic command issued
 * from the M1 to the M1XSP Type modules that connect to lighting devices.
 * Note: Only single light devices can be polled for status. Groups and
 * scenes will not return valid data. Enable the “2 Way” Poll setting for
 * the device to be polled. M1 Version 4.3.9 and after. This command
 * cannot be used by automation equipment.
 */
export default class InsteonLightingDeviceStatusRequest extends ElkCommand {
  constructor(readonly startingDeviceNumber: number, readonly deviceCount: number) {
    super('i', 'r', startingDeviceNumber.toString().padStart(3, '0') + deviceCount.toString());
  }
}
