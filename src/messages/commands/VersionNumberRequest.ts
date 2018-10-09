import ElkCommand from './ElkCommand';

/**
 * 4.36.1 Request M1 Version Number (vn)
 *
 * The vn command requests the M1’s version number,
 * and the VN command replies with the version number
 * data. If an M1XEP is connected to the M1, the M1XEP’s
 * version number will also be included. Available in M1
 * version 4.1.12 or 5.1.12 and later. M1XEP 1.3.2 or later.
 */
export default class VersionNumberRequest extends ElkCommand {
  constructor() {
    super('v', 'n');
  }
}
