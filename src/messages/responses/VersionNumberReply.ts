import ElkResponse from './ElkResponse';

function versionsToString(major: number, minor: number, patch: number) {
  return `${major.toString().padStart(2, '0')}.${minor
    .toString()
    .padStart(2, '0')}.${patch.toString().padStart(2, '0')}`;
}

/**
 * 4.36.2 Reply M1 Version Number (VN)
 */
export default class VersionNumberReply extends ElkResponse {
  static readonly COMMAND = 'VN';

  readonly m1Major: number;
  readonly m1Minor: number;
  readonly m1Patch: number;
  readonly m1xepMajor: number;
  readonly m1xepMinor: number;
  readonly m1xepPatch: number;

  constructor(raw: string) {
    super(raw);
    this.m1Major = parseInt(this.data.substr(0, 2), 16);
    this.m1Minor = parseInt(this.data.substr(2, 2), 16);
    this.m1Patch = parseInt(this.data.substr(4, 2), 16);
    this.m1xepMajor = parseInt(this.data.substr(6, 2), 16);
    this.m1xepMinor = parseInt(this.data.substr(8, 2), 16);
    this.m1xepPatch = parseInt(this.data.substr(10, 2), 16);
  }

  get m1Version() {
    return versionsToString(this.m1Major, this.m1Minor, this.m1Patch);
  }

  get m1XepVersion() {
    return versionsToString(this.m1xepMajor, this.m1xepMinor, this.m1xepPatch);
  }
}
