import ElkResponse from './ElkResponse';

/**
 * Reply With Keypad Areas
 *
 * @see 4.20.2 Reply With Keypad Areas (KA)
 */
export default class KeypadAreaAssignments extends ElkResponse {
  static readonly COMMAND = 'KA';

  readonly areas: number[];

  constructor(raw: string) {
    super(raw);

    this.areas = Array.from(this.data.substr(0, 16)).map(area => parseInt(area, 10));
  }

  getKeypadArea(keypad: number) {
    return this.areas[keypad - 1];
  }
}
