import ElkCommand from './ElkCommand';

/**
 * Ethernet Module Test Acknowledge
 *
 * If the Ethernet Module is alive, it will reply back to the M1
 * with: 06xk0057<cr><lf>.
 *
 * @see 4.4.6 Ethernet Module Test Acknowledge (xk)
 */
export default class EthernetModuleTestAcknowledge extends ElkCommand {
  constructor() {
    super('x', 'k');
  }
}
