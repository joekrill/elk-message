import ElkCommand from './ElkCommand';
import DisplayTextClearOption from '../../enums/DisplayTextClearOption';

export function encodeLineData(input?: string | null) {
  // If there is no data, return the terminator and pad with dummy character.
  if (!input || !input.length) {
    return '^'.padEnd(16, 'x');
  }

  // If the input is less then the allowed length, add the terminator character
  // and pad with dummy characters.
  if (input.length < 16) {
    return (input + '^').padEnd(16, 'x');
  }

  // Otherwise, make sure the input is limited to 16 characters.
  return input.substr(0, 16);
}

/**
 * Display Text On LCD Screen of keypads
 *
 * This is a M1 received message to display ascii text on the bottom line
 * of the LCD display on the keypads in the area specified. Enter the line
 * terminator, “^”, as the ending character of the line display if less
 * than 16 characters are to be displayed. The message line, L1 or L2,
 * will need dummy characters to fill the rest of the line for 16
 * characters each line.
 *
 * @see 4.13 Display Text On LCD Screen (dm)
 */
export default class DisplayTextOnScreen extends ElkCommand {
  constructor(
    readonly areaNumber: number,
    readonly firstLine: string | null = '',
    readonly secondLine: string | null = '',
    readonly clearOption: DisplayTextClearOption = !firstLine
      ? DisplayTextClearOption.Clear
      : DisplayTextClearOption.ClearWithStarKey,
    readonly beep: boolean = true,
    readonly timeout: number = 0
  ) {
    super(
      'd',
      'm',
      areaNumber.toString() +
        clearOption.toString() +
        (beep ? '1' : '0') +
        (timeout || 0).toString().padStart(5, '0') +
        encodeLineData(firstLine) +
        encodeLineData(secondLine)
    );
  }
}
