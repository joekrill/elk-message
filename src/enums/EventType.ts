enum EventType {
  NoEvent = 1000,
  FireALarm = 1001,
  FireSupervisoryAlarm = 1002,
  BurglarAlarmAnyArea = 1003,
  MedicalAlarmAnyArea = 1004,
  PoliceAlarmAnyArea = 1005,
  Aux1_24HourAlarmAnyArea = 1006,
  Aux2_24HourAlarmAnyArea = 1007,
  CarbonMonoxideAlarmAnyArea = 1008,
  EmergencyAlarmAnyArea = 1009,
  FreezeAlarmAnyArea = 1010,
  GasAlarmAnyArea = 1011,
  HeatAlarmAnyArea = 1012,
  WaterAlarmAnyArea = 1013,
  AlarmAnyArea = 1014,

  BurglarAlarmArea1 = 1015,
  BurglarAlarmArea2 = 1016,
  BurglarAlarmArea3 = 1017,
  BurglarAlarmArea4 = 1018,
  BurglarAlarmArea5 = 1019,
  BurglarAlarmArea6 = 1020,
  BurglarAlarmArea7 = 1021,
  BurglarAlarmArea8 = 1022,

  MedicalAlarmArea1 = 1023,
  MedicalAlarmArea2 = 1024,
  MedicalAlarmArea3 = 1025,
  MedicalAlarmArea4 = 1026,
  MedicalAlarmArea5 = 1027,
  MedicalAlarmArea6 = 1028,
  MedicalAlarmArea7 = 1029,
  MedicalAlarmArea8 = 1030,

  PoliceAlarmArea1 = 1031,
  PoliceAlarmArea2 = 1032,
  PoliceAlarmArea3 = 1033,
  PoliceAlarmArea4 = 1034,
  PoliceAlarmArea5 = 1035,
  PoliceAlarmArea6 = 1036,
  PoliceAlarmArea7 = 1037,
  PoliceAlarmArea8 = 1038,

  Aux1_24HourAlarmArea1 = 1039,
  Aux1_24HourAlarmArea2 = 1040,
  Aux1_24HourAlarmArea3 = 1041,
  Aux1_24HourAlarmArea4 = 1042,
  Aux1_24HourAlarmArea5 = 1043,
  Aux1_24HourAlarmArea6 = 1044,
  Aux1_24HourAlarmArea7 = 1045,
  Aux1_24HourAlarmArea8 = 1046,

  Aux2_24HourAlarmArea1 = 1047,
  Aux2_24HourAlarmArea2 = 1048,
  Aux2_24HourAlarmArea3 = 1049,
  Aux2_24HourAlarmArea4 = 1050,
  Aux2_24HourAlarmArea5 = 1051,
  Aux2_24HourAlarmArea6 = 1052,
  Aux2_24HourAlarmArea7 = 1053,
  Aux2_24HourAlarmArea8 = 1054,

  CarbonMonoxideAlarmArea1 = 1055,
  CarbonMonoxideAlarmArea2 = 1056,
  CarbonMonoxideAlarmArea3 = 1057,
  CarbonMonoxideAlarmArea4 = 1058,
  CarbonMonoxideAlarmArea5 = 1059,
  CarbonMonoxideAlarmArea6 = 1060,
  CarbonMonoxideAlarmArea7 = 1061,
  CarbonMonoxideAlarmArea8 = 1062,

  EmergencyAlarmArea1 = 1063,
  EmergencyAlarmArea2 = 1064,
  EmergencyAlarmArea3 = 1065,
  EmergencyAlarmArea4 = 1066,
  EmergencyAlarmArea5 = 1067,
  EmergencyAlarmArea6 = 1068,
  EmergencyAlarmArea7 = 1069,
  EmergencyAlarmArea8 = 1070,

  FreezeAlarmArea1 = 1071,
  FreezeAlarmArea2 = 1072,
  FreezeAlarmArea3 = 1073,
  FreezeAlarmArea4 = 1074,
  FreezeAlarmArea5 = 1075,
  FreezeAlarmArea6 = 1076,
  FreezeAlarmArea7 = 1077,
  FreezeAlarmArea8 = 1078,

  GasAlarmArea1 = 1079,
  GasAlarmArea2 = 1080,
  GasAlarmArea3 = 1081,
  GasAlarmArea4 = 1082,
  GasAlarmArea5 = 1083,
  GasAlarmArea6 = 1084,
  GasAlarmArea7 = 1085,
  GasAlarmArea8 = 1086,

  HeatAlarmArea1 = 1087,
  HeatAlarmArea2 = 1088,
  HeatAlarmArea3 = 1089,
  HeatAlarmArea4 = 1090,
  HeatAlarmArea5 = 1091,
  HeatAlarmArea6 = 1092,
  HeatAlarmArea7 = 1093,
  HeatAlarmArea8 = 1094,

  WaterAlarmArea1 = 1095,
  WaterAlarmArea2 = 1096,
  WaterAlarmArea3 = 1097,
  WaterAlarmArea4 = 1098,
  WaterAlarmArea5 = 1099,
  WaterAlarmArea6 = 1100,
  WaterAlarmArea7 = 1101,
  WaterAlarmArea8 = 1102,

  AlarmArea1 = 1103,
  AlarmArea2 = 1104,
  AlarmArea3 = 1105,
  AlarmArea4 = 1106,
  AlarmArea5 = 1107,
  AlarmArea6 = 1108,
  AlarmArea7 = 1109,
  AlarmArea8 = 1110,

  CodeLockout = 1111,
  CodeLockoutKeypad1 = 1112,
  CodeLockoutKeypad2 = 1113,
  CodeLockoutKeypad3 = 1114,
  CodeLockoutKeypad4 = 1115,
  CodeLockoutKeypad5 = 1116,
  CodeLockoutKeypad6 = 1117,
  CodeLockoutKeypad7 = 1118,
  CodeLockoutKeypad8 = 1119,
  CodeLockoutKeypad9 = 1120,
  CodeLockoutKeypad10 = 1121,
  CodeLockoutKeypad11 = 1122,
  CodeLockoutKeypad12 = 1123,
  CodeLockoutKeypad13 = 1124,
  CodeLockoutKeypad14 = 1125,
  CodeLockoutKeypad15 = 1126,
  CodeLockoutKeypad16 = 1127,

  FireTrouble = 1128,
  BurglarTrouble = 1129,
  FailToCommunicateTrouble = 1130,
  RfSensorLowBatteryTrouble = 1131,
  LostAncModuleTrouble = 1132,
  LostKeypadTrouble = 1133,
  LostInputExpanderTrouble = 1134,
  LostOutputExpanderTrouble = 1135
}

export default EventType;
