enum SystemTroubleType {
  None = 0,
  ACFail = 1 << 0,
  BoxTamper = 1 << 1,
  FailToCommunicate = 1 << 2,
  EEPromMemoryError = 1 << 3,
  LowBatteryControl = 1 << 4,
  TransmitterLowBattery = 1 << 5,
  OverCurrent = 1 << 6,
  TelephoneFault = 1 << 7,
  Output2 = 1 << 8,
  MissingKeypad = 1 << 9,
  ZoneExpander = 1 << 10,
  OutputExpander = 1 << 11,
  ELKRPRemoteAccess = 1 << 12,
  CommonAreaNotArmed = 1 << 13,
  FlashMemoryError = 1 << 14,
  SecurityAlert = 1 << 15,
  SerialPortExpander = 1 << 16,
  LostTransmitter = 1 << 17,
  GESmokeCleanMe = 1 << 18,
  EthernetTrouble = 1 << 19,
  DisplayMessageInKeypadLine1 = 1 << 20,
  DisplayMessageInKeypadLine2 = 1 << 21,
  FireTrouble = 1 << 22
}

export default SystemTroubleType;
