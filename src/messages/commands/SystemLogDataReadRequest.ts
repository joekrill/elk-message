import ElkCommand from './ElkCommand';

/**
 * 4.23.1 Request System Log Data (ld)
 *
 * Request to get system log data entry. The first entry is
 * index “1”, the last entry is index “511”. Log data index
 * “0” is the next location to be written, index 511 is
 * the oldest log data.
 */
export default class SystemLogDataReadRequest extends ElkCommand {
  constructor(readonly logIndex: number) {
    super('l', 'd', logIndex.toString().padStart(3, '0'));
  }
}
