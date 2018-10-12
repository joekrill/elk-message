import ElkResponse from './ElkResponse';
import UserCodeType from '../../enums/UserCodeType';

/**
 * Reply With Valid User Code Areas
 *
 * @see 4.37.2 Reply With Valid User Code Areas (UA)
 */
export default class UserCodeAreasReply extends ElkResponse {
  static readonly COMMAND = 'UA';

  readonly userCode: string;
  readonly diagnosticData: string;
  readonly userCodeLength: number;
  readonly userCodeType: UserCodeType;
  readonly temperatureMode: string;
  readonly areas: boolean[];

  constructor(raw: string) {
    super(raw);
    this.userCode = this.data.substr(0, 6);
    const areaBits = parseInt(this.data.substr(6, 2), 16).toString(2);
    this.areas = Array.from(areaBits).map(bit => bit === '1');
    this.diagnosticData = this.data.substr(8, 8);
    this.userCodeLength = parseInt(this.data.substr(16, 1), 10);
    this.userCodeType = this.data.charCodeAt(17);
    this.temperatureMode = this.data[18];
  }

  isValidForArea(areaNumber: number) {
    return this.areas[areaNumber - 1];
  }
}
