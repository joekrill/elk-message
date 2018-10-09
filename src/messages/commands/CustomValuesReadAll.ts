import ElkCommand from './ElkCommand';

/**
 * 4.10.2 Read ALL Custom Values (cp)
 *
 * @see {CustomValueReply}
 */
export default class CustomValuesReadAll extends ElkCommand {
  constructor() {
    super('c', 'p');
  }
}
