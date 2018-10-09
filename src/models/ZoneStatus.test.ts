import ZoneStatus from './ZoneStatus';
import ZonePhysicalState from '../enums/ZonePhysicalState';
import ZoneLogicalState from '../enums/ZoneLogicalState';

const ZONE_STATUS_MAP: { [index: string]: [ZoneLogicalState, ZonePhysicalState] } = {
  '0': [ZoneLogicalState.Normal, ZonePhysicalState.Unconfigured],
  '1': [ZoneLogicalState.Normal, ZonePhysicalState.Open],
  '2': [ZoneLogicalState.Normal, ZonePhysicalState.EOL],
  '3': [ZoneLogicalState.Normal, ZonePhysicalState.Short],
  '4': [ZoneLogicalState.Trouble, ZonePhysicalState.Unconfigured],
  '5': [ZoneLogicalState.Trouble, ZonePhysicalState.Open],
  '6': [ZoneLogicalState.Trouble, ZonePhysicalState.EOL],
  '7': [ZoneLogicalState.Trouble, ZonePhysicalState.Short],
  '8': [ZoneLogicalState.Violated, ZonePhysicalState.Unconfigured],
  '9': [ZoneLogicalState.Violated, ZonePhysicalState.Open],
  A: [ZoneLogicalState.Violated, ZonePhysicalState.EOL],
  B: [ZoneLogicalState.Violated, ZonePhysicalState.Short],
  C: [ZoneLogicalState.Bypassed, ZonePhysicalState.Unconfigured],
  D: [ZoneLogicalState.Bypassed, ZonePhysicalState.Open],
  E: [ZoneLogicalState.Bypassed, ZonePhysicalState.EOL],
  F: [ZoneLogicalState.Bypassed, ZonePhysicalState.Short]
};

describe('ZoneStatus', () => {
  describe('parse', () => {
    Object.keys(ZONE_STATUS_MAP).forEach(hexValue => {
      it(`parses ${hexValue}`, () => {
        const status = ZoneStatus.parse(hexValue);
        expect(status.logicalState).toBe(ZONE_STATUS_MAP[hexValue][0]);
        expect(status.physicalState).toBe(ZONE_STATUS_MAP[hexValue][1]);
        expect(status.hexValue).toBe(hexValue);
      });
    });
  });

  describe('constructor', () => {
    Object.keys(ZONE_STATUS_MAP).forEach(hexValue => {
      it(`constructs ${hexValue}`, () => {
        const status = new ZoneStatus(ZONE_STATUS_MAP[hexValue][0], ZONE_STATUS_MAP[hexValue][1]);
        expect(status.hexValue).toBe(hexValue);
      });
    });
  });
});
