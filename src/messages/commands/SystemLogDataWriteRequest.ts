import ElkCommand from './ElkCommand';
import LogWriteType from '../../enums/LogWriteType';

/**
 * 4.23.2 Request Write Log Data (le)
 *
 * The Write Log Data Command “le” writes log data into the
 * M1 log specifically to trigger communicator reporting to
 * the central station. A valid zone must be programmed for
 * communicator reporting. The M1 will return an “OK”crlf
 * response when the data is written to the log.
 */
export default class SystemLogDataWriteRequest extends ElkCommand {
  constructor(
    readonly logType: LogWriteType,
    readonly eventType: number,
    readonly zoneNumber: number,
    readonly areaNumber: number
  ) {
    super(
      'l',
      'e',
      logType.toString().padStart(3, '0') +
        eventType
          .toString()
          .padStart(4, '0')
          .substr(-3) +
        zoneNumber.toString().padStart(3, '0') +
        areaNumber.toString()
    );
  }
}
