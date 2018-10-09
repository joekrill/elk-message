import ElkResponse from './ElkResponse';

/**
 * 4.26 Reset Ethernet Module (RE)
 *
 * This command is originated from the M1 and causes the M1XEP
 * Ethernet Module to reset its processor and/or its IP address
 * to: 192.168.0.251. This can be used when the IP address of the
 * M1XEP is set to an unknown value. This is accessed through the
 * M1’s Keypad Global Installer Programming, Option 45, then enter
 * 96. M1 Version 4.3.7 and after.
 */
export default class EthernetModuleReset extends ElkResponse {
  static readonly COMMAND = 'RE';

  readonly isIpAddressReset: boolean;

  constructor(raw: string) {
    super(raw);

    this.isIpAddressReset = this.data[0] === '1';
  }
}
