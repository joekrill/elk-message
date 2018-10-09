import ControlOutputStatusReport from './ControlOutputStatusReport';

describe('ControlOutputStatusReport', () => {
  describe('parses', () => {
    const raw =
      'D6CS0100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000008F\r\n';
    let controlOutputStatusReport: ControlOutputStatusReport;

    beforeEach(() => {
      controlOutputStatusReport = new ControlOutputStatusReport(raw);
    });

    it('reports output 1 as off', () => {
      expect(controlOutputStatusReport.isOutputOn(1)).toBe(false);
    });

    it('reports output 2 as on', () => {
      expect(controlOutputStatusReport.isOutputOn(2)).toBe(true);
    });
  });
});
