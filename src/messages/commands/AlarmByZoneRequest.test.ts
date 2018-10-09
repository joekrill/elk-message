import AlarmByZoneRequest from './AlarmByZoneRequest';

describe('AlarmByZoneRequest', () => {
  let alarmByZoneRequest: AlarmByZoneRequest;

  beforeEach(() => {
    alarmByZoneRequest = new AlarmByZoneRequest();
  });

  it('generates the expected raw message', () => {
    expect(alarmByZoneRequest.raw).toBe('06az005F\r\n');
  });
});
