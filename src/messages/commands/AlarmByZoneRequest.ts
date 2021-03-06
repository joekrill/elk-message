import ElkCommand from './ElkCommand';

/**
 * 4.5 Alarm By Zone Request (az)
 *
 * Request alarm by zone
 *
 * The control panel responds to this message with a
 * {@link AlarmByZoneReport}
 */
export default class AlarmByZoneRequest extends ElkCommand {
  constructor() {
    super('a', 'z');
  }
}
