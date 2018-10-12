import ElkCommand from './ElkCommand';

/**
 * Control Output toggle
 *
 * @see 4.9.5 Control Output toggle (ct)
 */
export default class ControlOutputToggle extends ElkCommand {
  constructor(readonly output: number) {
    super('c', 't', output.toString().padStart(3, '0'));
  }
}
