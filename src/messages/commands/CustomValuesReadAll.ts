import ElkCommand from './ElkCommand';

/**
 * Read ALL Custom Values
 *
 * The control response with {@link CustomValueReply}
 *
 * @see 4.10.2 Read ALL Custom Values (cp)
 */
export default class CustomValuesReadAll extends ElkCommand {
  constructor() {
    super('c', 'p');
  }
}
