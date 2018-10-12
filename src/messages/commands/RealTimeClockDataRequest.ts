import ElkCommand from './ElkCommand';

/**
 * Request Real Time Clock Data
 *
 * @see 4.28.1 Request Real Time Clock Data (rr)
 */
export default class RealTimeClockDataRequest extends ElkCommand {
  constructor() {
    super('r', 'r');
  }
}
