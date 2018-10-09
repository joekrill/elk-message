import ElkCommand from './ElkCommand';

/**
 * 4.4.6 Ethernet Module Test Acknowledge (xk)
 *
 * If the Ethernet Module is alive, it will reply back to the M1
 * with: 06xk0057<cr><lf>.
 */
export default class EthernetModuleTestAcknowledge extends ElkCommand {
  constructor() {
    super('x', 'k');
  }
}
