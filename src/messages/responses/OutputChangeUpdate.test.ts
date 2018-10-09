import OutputChangeUpdate from './OutputChangeUpdate';

describe('OutputChangeUpdate', () => {
  describe('parses', () => {
    const raw = '0ACC003100E5\r\n';
    let outputChangeUpdate: OutputChangeUpdate;

    beforeEach(() => {
      outputChangeUpdate = new OutputChangeUpdate(raw);
    });

    it('has the expected data', () => {
      expect(outputChangeUpdate.outputNumber).toBe(3);
      expect(outputChangeUpdate.isOn).toBe(true);
    });
  });
});
