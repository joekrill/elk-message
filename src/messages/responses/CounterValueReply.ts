import ElkResponse from './ElkResponse';

/**
 * 4.12.3 Reply With Counter Value Format (CV)
 */
export default class CounterValueReply extends ElkResponse {
  static readonly COMMAND = 'CV';

  readonly counterNumber: number;
  readonly value: number;

  constructor(raw: string) {
    super(raw);
    this.counterNumber = parseInt(this.data.substr(0, 2), 10);
    this.value = parseInt(this.data.substr(2, 5), 10);
  }
}
