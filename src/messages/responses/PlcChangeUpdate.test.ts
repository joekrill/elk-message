import PlcChangeUpdate from './PlcChangeUpdate';

describe('PlcChangeUpdate', () => {
  describe('parses', () => {
    const raw = '0BPCA01000099\r\n';
    let plcChangeUpdate: PlcChangeUpdate;

    beforeEach(() => {
      plcChangeUpdate = new PlcChangeUpdate(raw);
    });

    it('has the expected data', () => {
      expect(plcChangeUpdate.houseCode).toBe('A');
      expect(plcChangeUpdate.unitCode).toBe(1);
      expect(plcChangeUpdate.level).toBe(0);
    });
  });
});
