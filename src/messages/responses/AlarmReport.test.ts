import AlarmReport from './AlarmReport';

describe('AlarmReport', () => {
  describe('parses', () => {
    const raw = '16AR12345611340100110085\r\n';
    let alarmReport: AlarmReport;

    beforeEach(() => {
      alarmReport = new AlarmReport(raw);
    });

    it('account number is 123456', () => {
      expect(alarmReport.accountNumber).toBe(123456);
    });

    it('area i 1', () => {
      expect(alarmReport.areaNumber).toBe(1);
    });

    it('zone is 1', () => {
      expect(alarmReport.zoneNumber).toBe(1);
    });

    it('alarm code is 1134', () => {
      expect(alarmReport.alarmCode).toBe(1134);
    });

    it('ip address number is 1', () => {
      expect(alarmReport.ipAddressNumber).toBe(1);
    });
  });
});
