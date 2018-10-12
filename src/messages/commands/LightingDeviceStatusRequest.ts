import ElkCommand from './ElkCommand';

/**
 * Request Lighting Device Status
 *
 * This command allows the M1 to poll single light devices to obtain
 * their on, off, dim status. This will be an automatic command issued
 * from the M1 to the M1XSP Type modules that connect to lighting devices.
 * Note: Only single light devices can be polled for status. Groups and
 * scenes will not return valid data. Enable the “2 Way” Poll setting for
 * the device to be polled. M1 Version 4.3.9 and after. This command
 * cannot be used by automation equipment.
 *
 * @see 4.14.1 Request Lighting Device Status (ds)
 */
export default class LightingDeviceStatusRequest extends ElkCommand {
  constructor(readonly lightingDeviceNumber: number) {
    super('d', 's', lightingDeviceNumber.toString().padStart(3, '0'));
  }
}
