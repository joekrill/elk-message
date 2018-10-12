import ElkCommand from './ElkCommand';

/**
 * Task Activation
 *
 * You can use your PC to send a command to activate a Task. Tasks
 * are event flags that are common to the telephone remote control
 * option 2, the keypad user menu option 1, the Whenever/Then
 * programming, and the ASCII string programming. Any one of these
 * methods can activate a Task (events 2001 to 2032). The
 * Whenever/Then programming rules can then issue control commands
 * when a Task has been activated. When all rules that are activated
 * from the Task is serviced, the Task will be de-activated.
 *
 * The data portion of the Task Activation command, DDD, is three
 * decimal ASCII digits (1 base) corresponding to the number of the
 * desired Task to activate. Range: 001 to 032. This value is a three
 * digit value for future expansion.
 *
 * @see 4.34 Task Activation (tn)
 */
export default class TaskActivation extends ElkCommand {
  constructor(readonly taskNumber: number) {
    super('t', 'n', taskNumber.toString().padStart(3, '0'));
  }
}
