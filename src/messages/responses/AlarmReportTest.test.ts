import AlarmReportTest from './AlarmReportTest';

describe('AlarmReportTest', () => {
  const raw = '07AT10073\r\n';
  let alarmReportTest: AlarmReportTest;

  describe('initialization from raw', () => {
    beforeEach(() => {
      alarmReportTest = new AlarmReportTest(raw);
    });

    it('ip address number is 1', () => {
      expect(alarmReportTest.ipAddressNumber).toBe(1);
    });
  });
});
