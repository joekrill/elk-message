enum PlcFunctionCode {
  AllUnitsOff = 1,
  AllLightsOn = 2,
  UnitOn = 3,
  UnitOff = 4,
  Dim = 5,
  Bright = 6,
  AllLightsOff = 7,
  ExtendedCode = 8,
  PresetDim = 9,
  ExtendedData = 10,
  StatusRequest = 11,
  HailRequest = 12,
  HailAcknowledgement = 13,
  StatusOn = 14,
  StatusOff = 15
}

export default PlcFunctionCode;
