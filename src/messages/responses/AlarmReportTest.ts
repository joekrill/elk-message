import ElkResponse from './ElkResponse';

/**
 * Alarm Reporting Test
 *
 * The Alarm Reporting Test string is sent every 15 minutes from the M1
 * as a keep alive message to the M1XEP Ethernet Module along with which
 * IP address to test. All IP addresses are set into the M1XEP module.
 *
 * @see 4.4.3 Alarm Reporting Test (AT)
 */
export default class AlarmReportTest extends ElkResponse {
  static readonly COMMAND = 'AT';

  /**
   * IP Address to test (1..8), identified by it's configured
   * number/index (1-based).
   */
  readonly ipAddressNumber: number;

  constructor(raw: string) {
    super(raw);
    this.ipAddressNumber = parseInt(this.data.substr(0, 1), 10);
  }
}
