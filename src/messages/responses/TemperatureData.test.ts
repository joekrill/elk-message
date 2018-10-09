import TemperatureData from './TemperatureData';

describe('TemperatureData', () => {
  describe('parses', () => {
    const raw =
      '66LW108109000000000000000000000000000000000000000000000000000000000000000000000000000000000000130000007A\r\n';
    let temperatureData: TemperatureData;

    beforeEach(() => {
      temperatureData = new TemperatureData(raw);
    });

    it('reports the expected values', () => {
      expect(temperatureData.getKeypadTemperature(1)).toBe(68);
      expect(temperatureData.getKeypadTemperature(2)).toBe(69);
      expect(temperatureData.getZoneSensorTemperature(15)).toBe(70);
    });
  });
});
