import ElkCommand from './ElkCommand';

/**
 * Control Output On (cn)
 */
export default class ControlOutputOn extends ElkCommand {
  constructor(readonly output: number, readonly duration: number = 0) {
    super('c', 'n', output.toString().padStart(3, '0') + duration.toString().padStart(5, '0'));
  }
}
