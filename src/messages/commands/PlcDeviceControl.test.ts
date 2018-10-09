import PlcDeviceControl from './PlcDeviceControl';
import PlcFunctionCode from '../../enums/PlcFunctionCode';

describe('PlcDeviceControl', () => {
  const EXPECTED_RAW = '11pcA01010000050043\r\n';
  let plcDeviceControl: PlcDeviceControl;

  describe('valid value number', () => {
    beforeEach(() => {
      plcDeviceControl = new PlcDeviceControl('A', 1, PlcFunctionCode.AllUnitsOff, 0, 5);
    });

    it('Generates the expected raw', () => {
      expect(plcDeviceControl.raw).toBe(EXPECTED_RAW);
    });
  });
});
