import ElkResponse from './ElkResponse';

/**
 * Installer Mode Exited
 *
 * This command is automatically sent through serial port 0 only
 * when the installer mode is terminated. This is done by pressing
 * the “*” key three times or the installer timer runs out. This
 * command is used by the M1XEP Ethernet Interface to know when to
 * reload M1 program data after an installer has done any keypad
 * programming. M1 Version 4.2.8 and after.
 *
 * @see 4.18.1 Send Installer Mode Exited (IE)
 */
export default class InstallerModeExited extends ElkResponse {
  static readonly COMMAND = 'IE';
}
