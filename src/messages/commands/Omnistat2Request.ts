import ElkCommand from './ElkCommand';

/**
 * Request - Omnistat 2 From PC to M1 ASCII Protocol
 *
 * This request command allows for requesting data from the M1XSP that
 * is connected to the HAI Omnistate 2 HVAC Thermostat. The Omnistat 2
 * protocol is required to build the ASCII command strings. M1 version
 * 5.1.9 or later is required for this command.
 *
 * @see 4.35.4 Request - Omnistat 2 From PC to M1 ASCII Protocol (t2)
 */
export default class Omnistat2Request extends ElkCommand {
  constructor(readonly omnistatData: string) {
    super('t', '2', omnistatData.padEnd(36, '0'));
  }
}
