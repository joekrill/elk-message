import ElkCommand from './ElkCommand';

/**
 * 4.12.2 Write Counter Value (cx)
 */
export default class CounterValueWrite extends ElkCommand {
  constructor(readonly counterNumber: number, readonly value: number) {
    super('c', 'x', counterNumber.toString().padStart(2, '0') + value.toString().padStart(5, '0'));
  }
}
