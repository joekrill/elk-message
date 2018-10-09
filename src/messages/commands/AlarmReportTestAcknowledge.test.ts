import AlarmReportTestAcknowledge from './AlarmReportTestAcknowledge';

describe('AlarmReportTestAcknowledge', () => {
  let alarmReportTestAcknowledge: AlarmReportTestAcknowledge;

  beforeEach(() => {
    alarmReportTestAcknowledge = new AlarmReportTestAcknowledge();
  });

  it('generates the expected raw message', () => {
    expect(alarmReportTestAcknowledge.raw).toBe('06at0065\r\n');
  });
});
