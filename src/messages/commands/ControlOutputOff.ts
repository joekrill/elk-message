import ElkCommand from './ElkCommand';

/**
 * Control Output off
 *
 * @see 4.9.1 Control Output off (cf)
 */
export default class ControlOutputOff extends ElkCommand {
  constructor(readonly output: number) {
    super('c', 'f', output.toString().padStart(3, '0'));
  }
}
