import ElkCommand from './ElkCommand';

/**
 * Speak Phrase at Voice/Siren Output
 *
 * @see 4.32.2 Speak Phrase at Voice/Siren Output (sp)
 */
export default class SpeakPhrase extends ElkCommand {
  constructor(readonly phraseNumber: number) {
    super('s', 'p', phraseNumber.toString().padStart(3, '0'));
  }
}
