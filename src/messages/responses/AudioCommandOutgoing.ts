import ElkResponse from './ElkResponse';
import AudioCommand from '../../enums/AudioCommand';

/**
 * 4.8.3 Outgoing Audio Command (CD)
 *
 * @see {AudioCommandIncoming}
 */
export default class AudioCommandOutgoing extends ElkResponse {
  static readonly COMMAND = 'CD';

  readonly audioCommand: AudioCommand;
  readonly audioSource: number;
  readonly audioZone: number;
  readonly value: number;

  constructor(raw: string) {
    super(raw);

    this.audioCommand = parseInt(this.data.substr(0, 2), 10);
    this.audioSource = parseInt(this.data.substr(2, 2), 10);
    this.audioZone = parseInt(this.data.substr(4, 2), 10);
    this.value = parseInt(this.data.substr(6, 3), 10);
  }
}
