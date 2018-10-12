import ElkResponse from './ElkResponse';
import UserCodeChangeType from '../../enums/UserCodeChangeType';

/**
 * Reply Change User Code
 *
 * Response to {@link UserCodeChangeRequest}
 *
 * @see 4.11.2 Reply Change User Code (CU)
 */
export default class UserCodeChangeReply extends ElkResponse {
  static readonly COMMAND = 'CU';

  readonly userCode: number;
  readonly isSuccessful: boolean;
  readonly isInvalidAuthorizationCode: boolean;
  readonly isDuplicateCode: boolean;
  readonly changeType: UserCodeChangeType;

  constructor(raw: string) {
    super(raw);
    this.userCode = parseInt(this.data.substr(0, 3), 10);
    this.isSuccessful = this.userCode > 0 && this.userCode < 255;
    this.isInvalidAuthorizationCode = this.userCode === 0;
    this.isDuplicateCode = this.userCode === 255;
    this.changeType = this.reserved ? parseInt(this.reserved[0], 10) : UserCodeChangeType.UserCode;
  }
}
