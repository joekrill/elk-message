import ElkResponse from './ElkResponse';
import PartyMode from '../../enums/PartyMode';

/**
 * Reply With Audio Data
 *
 * @see 4.6.2 Reply With Audio Data (CA)
 */
export default class AudioDataReply extends ElkResponse {
  static readonly COMMAND = 'CA';

  /**
   * The zone number (0..18)
   */
  readonly zone: number;

  /**
   * Whether zone is powered.
   */
  readonly isPowered: boolean;

  /**
   * Source (1..12)
   */
  readonly source: number;

  /**
   * Volume (0..100)
   */
  readonly volume: number;

  /**
   * Bass (000=down(-), 50=center, 100=up(+))
   */
  readonly bass: number;

  /**
   * Treble (000=down(-), 50=center), 100=up(+))
   */
  readonly treble: number;

  /**
   * Whether loudness is turned on.
   */
  readonly isLoudness: boolean;

  /**
   * Balance (000=left, 50=center, 100=right)
   */
  readonly balance: number;

  /**
   * Party mode (‘0’=off, ‘1’=on, ‘2’=master)
   */
  readonly partyMode: PartyMode;

  readonly isDoNotDisturb: boolean;

  constructor(raw: string) {
    super(raw);
    this.zone = parseInt(this.data.substr(0, 2), 10);
    this.isPowered = this.data.substr(2, 1) === '1';
    this.source = parseInt(this.data.substr(3, 2), 10);
    this.volume = parseInt(this.data.substr(5, 3), 10);
    this.bass = parseInt(this.data.substr(8, 3), 10);
    this.treble = parseInt(this.data.substr(11, 3), 10);
    this.isLoudness = this.data.substr(14, 1) === '1';
    this.balance = parseInt(this.data.substr(15, 3), 10);
    this.partyMode = parseInt(this.data.substr(18, 1), 10);
    this.isDoNotDisturb = this.data.substr(19, 1) === '1';
  }
}
