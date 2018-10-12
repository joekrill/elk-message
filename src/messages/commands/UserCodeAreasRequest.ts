import ElkCommand from './ElkCommand';

/**
 * Request Valid User Code Areas
 *
 * This request command allows automation equipment to send a
 * user code to the control and have returned what areas the
 * code is valid in. The returned value is an 8 bit masked value
 * with bit 0 corresponding to area 1, up to bit 7 corresponding
 * to area 8. If the returned value is 0, then the code is not valid
 * in any area. M1 Version 4.2.5 , type of code is in Version 4.3.6
 * and after.
 *
 * @see 4.37.1 Request Valid User Code Areas (ua)
 */
export default class UserCodeAreasRequest extends ElkCommand {
  constructor(readonly userCode: string) {
    super('u', 'a', userCode.padStart(6, '0'));
  }
}
