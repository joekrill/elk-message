import AlarmReportAcknowledge from './AlarmReportAcknowledge';

describe('AlarmReportAcknowledge', () => {
  let alarmReportAcknowledge: AlarmReportAcknowledge;

  beforeEach(() => {
    alarmReportAcknowledge = new AlarmReportAcknowledge();
  });

  it('generates the expected raw message', () => {
    expect(alarmReportAcknowledge.raw).toBe('06ar0067\r\n');
  });
});
