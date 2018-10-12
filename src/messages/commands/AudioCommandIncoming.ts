import ElkCommand from './ElkCommand';
import AudioCommand from '../../enums/AudioCommand';

/**
 * Incoming Audio Command
 *
 * An M1XEP Ethernet Module is required to intercept the “cd” command.
 * These commands are sent into the M1XEP via the Ethernet connection
 * and passed through to the M1. The M1XEP builds custom audio commands
 * to control the audio equipment and sends these commands to the audio
 * equipment via ethernet. An IP232 Ethernet Module may be required at
 * the audio equipment to received the commands if no Ethernet Port is
 * available on the audio equipment. The incoming “cd” command can
 * trigger Rules in the M1 which can fire outgoing audio equipment
 * “CD” commands or other control Rules. ELKRP downloads the Audio
 * Equipment Command tables into the M1XEP according to the Audio
 * Equipment Manufacturer. M1 version 4.1.11, 5.1.11 or later is required.
 *
 * @see 4.8.1 Incoming Audio Command (cd)
 */
export default class AudioCommandIncoming extends ElkCommand {
  constructor(
    readonly audioCommand: AudioCommand,
    readonly audioSource: number,
    readonly audioZone: number,
    readonly value: number = 0
  ) {
    super(
      'c',
      'd',
      audioCommand.toString().padStart(2, '0') +
        audioSource.toString().padStart(2, '0') +
        audioZone.toString().padStart(2, '0') +
        value.toString().padStart(3, '0')
    );
  }
}
