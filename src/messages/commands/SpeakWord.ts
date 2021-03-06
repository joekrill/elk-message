import ElkCommand from './ElkCommand';

/**
 * Speak Word at Voice/Siren Output
 *
 * @see 4.32.1 Speak Word at Voice/Siren Output (sw)
 */
export default class SpeakWord extends ElkCommand {
  constructor(readonly wordNumber: number) {
    super('s', 'w', wordNumber.toString().padStart(3, '0'));
  }
}
