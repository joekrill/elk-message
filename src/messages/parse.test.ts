import parse from './parse';
import ArmingStatusReport from './responses/ArmingStatusReport';
import AlarmReport from './responses/AlarmReport';
import AlarmReportTest from './responses/AlarmReportTest';
import EthernetModuleTest from './responses/EthernetModuleTest';
import AlarmByZoneReport from './responses/AlarmByZoneReport';
import AudioDataReply from './responses/AudioDataReply';
import OutputChangeUpdate from './responses/OutputChangeUpdate';
import AudioCommandOutgoing from './responses/AudioCommandOutgoing';
import ControlOutputStatusReport from './responses/ControlOutputStatusReport';
import CustomValueReply from './responses/CustomValueReply';
import UserCodeChangeReply from './responses/UserCodeChangeReply';
import CounterValueReply from './responses/CounterValueReply';
import LightingDeviceDataReply from './responses/LightingDeviceDataReply';
import ExntryExitTimer from './responses/EntryExitTimer';
import EmailSendTrigger from './responses/EmailSendTrigger';
import UserCodeEntry from './responses/UserCodeEntry';
import InstallerModeExited from './responses/InstallerModeExited';
import InsteonLightingDeviceStatusReply from './responses/InsteonLightingDeviceStatusReply';
import KeypadAreaAssignments from './responses/KeypadAreaAssignments';
import KeypadKeyChange from './responses/KeypadKeyChange';
import KeypadFunctionKeyPressReply from './responses/KeypadFunctionKeyPressReply';
import SystemLogDataUpdate from './responses/SystemLogDataUpdate';
import TemperatureData from './responses/TemperatureData';
import PlcChangeUpdate from './responses/PlcChangeUpdate';
import PlcDeviceStatusReply from './responses/PlcDeviceStatusReply';
import EthernetModuleReset from './responses/EthernetModuleReset';
import ElkRPConnected from './responses/ElkRPConnected';
import RealTimeClockDataReply from './responses/RealTimeClockDataReply';
import TextDescriptionReply from './responses/TextDescriptionReply';
import SystemTroubleStatusReply from './responses/SystemTroubleStatusReply';
import TemperatureReply from './responses/TemperatureReply';
import TaskChangeUpdate from './responses/TaskChangeUpdate';
import ThermostatData from './responses/ThermostatData';
import Omnistat2Reply from './responses/Omnistat2Reply';
import VersionNumberReply from './responses/VersionNumberReply';
import UserCodeAreasReply from './responses/UserCodeAreasReply';
import AlarmMemoryUpdate from './responses/AlarmMemoryUpdate';
import ZoneChangeUpdate from './responses/ZoneChangeUpdate';
import ZoneBypassReply from './responses/ZoneBypassReply';
import ZonePartitionReport from './responses/ZonePartitionReport';
import ZoneStatusReport from './responses/ZoneStatusReport';
import ZoneDefinitionData from './responses/ZoneDefinitionData';
import ZoneVoltageData from './responses/ZoneVoltageData';
import InsteonLightingDeviceProgrammed from './responses/InsteonLightingDeviceProgrammed';
import UnknownElkResponse from './responses/UnknownElkResponse';

const TESTS: [string, any][] = [
  ['1EAS100000004000000030000000000E\r\n', ArmingStatusReport],
  ['16AR12345611340100110085\r\n', AlarmReport],
  ['07AT10073\r\n', AlarmReportTest],
  ['16XK2636115020605110006F\r\n', EthernetModuleTest],
  [
    'D6AZ00000000900000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000082\r\n',
    AlarmByZoneReport
  ],
  ['20CA0110205006004010500000000000C1\r\n', AudioDataReply],
  ['0ACC003100E5\r\n', OutputChangeUpdate],
  ['0FCD02030400000EA\r\n', AudioCommandOutgoing],
  [
    'D6CS0100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000008F\r\n',
    ControlOutputStatusReport
  ],
  ['0ECR01001230000F\r\n', CustomValueReply],
  ['09CU005000A\r\n', UserCodeChangeReply],
  ['0DCV0100123003C\r\n', CounterValueReply],
  ['0BDS001990094\r\n', LightingDeviceDataReply],
  ['0FEE10060120100E5\r\n', ExntryExitTimer],
  ['09EM0010014\r\n', EmailSendTrigger],
  ['17IC0000030405060000100CC\r\n', UserCodeEntry],
  ['06IE00AC\r\n', InstallerModeExited],
  ['22IR0014123456ABCDEF987654A1B2C3006F\r\n', InsteonLightingDeviceStatusReply],
  ['16KA12345678111111110081\r\n', KeypadAreaAssignments],
  ['19KC01112010000200000000010\r\n', KeypadKeyChange],
  ['11KF01C200000000087\r\n', KeypadFunctionKeyPressReply],
  ['1CLD1193102119450607001505003F\r\n', SystemLogDataUpdate],
  [
    '66LW108109000000000000000000000000000000000000000000000000000000000000000000000000000000000000130000007A\r\n',
    TemperatureData
  ],
  ['0BPCA01000099\r\n', PlcChangeUpdate],
  [
    '47PS001111111111111110000000000000000000000000000000000000000000000000053\r\n',
    PlcDeviceStatusReply
  ],
  ['07RE00072\r\n', EthernetModuleReset],
  ['08RP000036\r\n', ElkRPConnected],
  ['16RR0059107251205110006E\r\n', RealTimeClockDataReply],
  ['1BSD01001Front DoorKeypad0089\r\n', TextDescriptionReply],
  ['28SS1000000000000000000000000000000000002F\r\n', SystemTroubleStatusReply],
  ['0CST001135005C\r\n', TemperatureReply],
  ['0ATC001000D7\r\n', TaskChangeUpdate],
  ['13TR01200726875000000\r\n', ThermostatData],
  ['2AT200000000000000000000000000000000000000C7\r\n', Omnistat2Reply],
  ['36VN05010C0103020000000000000000000000000000000000000074\r\n', VersionNumberReply],
  ['19UA123456C30000000041F00CA\r\n', UserCodeAreasReply],
  ['0EAM110000110019\r\n', AlarmMemoryUpdate],
  ['0AZC002200CE\r\n', ZoneChangeUpdate],
  ['0AZB123100CC\r\n', ZoneBypassReply],
  [
    'D6ZP20800000900000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000010068\r\n',
    ZonePartitionReport
  ],
  [
    'D6ZS20B000009000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000D0068\r\n',
    ZoneStatusReport
  ],
  [
    'D6ZD123456789:;<=>?@ABCDEFGHIJKLMNOPQRST000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000T00CA\r\n',
    ZoneDefinitionData
  ],
  ['0CZV123072004E\r\n', ZoneVoltageData],
  ['0AIP001400D1\r\n', InsteonLightingDeviceProgrammed],
  ['00ZZ0000000\r\n', UnknownElkResponse]
];

describe('parse', () => {
  TESTS.forEach(([raw, ClassType]) => {
    describe(`${raw.substr(0, 25)}...`, () => {
      it(`generates a ${ClassType.name}`, () => {
        expect(parse(raw)).toBeInstanceOf(ClassType);
      });
    });
  });
});
