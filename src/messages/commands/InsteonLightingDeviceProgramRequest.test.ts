import InsteonLightingDeviceProgramRequest from './InsteonLightingDeviceProgramRequest';

describe('InsteonLightingDeviceProgramRequest', () => {
  let insteonLightingDeviceProgramRequest: InsteonLightingDeviceProgramRequest;

  describe('for device 1-8', () => {
    beforeEach(() => {
      insteonLightingDeviceProgramRequest = new InsteonLightingDeviceProgramRequest(1, [
        '123456',
        'ABCDEF',
        '987654',
        'A1B2C3'
      ]);
    });

    it('generates the expected raw message', () => {
      expect(insteonLightingDeviceProgramRequest.raw).toBe(
        '22ip0014123456ABCDEF987654A1B2C30031\r\n'
      );
    });
  });
});
