import EthernetModuleTestAcknowledge from './EthernetModuleTestAcknowledge';

describe('EthernetModuleTestAcknowledge', () => {
  let ethernetModuleTestAcknowledge: EthernetModuleTestAcknowledge;

  beforeEach(() => {
    ethernetModuleTestAcknowledge = new EthernetModuleTestAcknowledge();
  });

  it('generates the expected raw message', () => {
    expect(ethernetModuleTestAcknowledge.raw).toBe('06xk0057\r\n');
  });
});
