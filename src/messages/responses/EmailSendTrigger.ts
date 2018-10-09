import ElkResponse from './ElkResponse';

/**
 * 4.16.1 Send Email Trigger Data (EM)
 *
 * This command allows the triggering of email transmissions from
 * the M1XEP Ethernet interface. This command originates in the M1
 * and is sent to the M1XEP through serial port 0 only.
 * M1 Version 4.2.8 and after.
 */
export default class EmailSendTrigger extends ElkResponse {
  static readonly COMMAND = 'EM';

  readonly emailAddressNumber: number;

  constructor(raw: string) {
    super(raw);

    this.emailAddressNumber = parseInt(this.data.substr(0, 3), 10);
  }
}
