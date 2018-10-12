# elk-message

[![styled with prettier](https://img.shields.io/badge/styled_with-prettier-ff69b4.svg)](https://github.com/prettier/prettier)
[![Greenkeeper badge](https://badges.greenkeeper.io/joekrill/elk-message.svg)](https://greenkeeper.io/)
[![Travis](https://travis-ci.org/joekrill/elk-message.svg?branch=master)](https://travis-ci.org/joekrill/elk-message)
[![Coveralls](https://coveralls.io/repos/github/joekrill/elk-message/badge.svg)](https://coveralls.io/github/joekrill/elk-message)
[![Dev Dependencies](https://david-dm.org/joekrill/elk-message/dev-status.svg)](https://david-dm.org/joekrill/elk-message?type=dev)

A module for parsing and generating messages for the [Elk M1](https://www.elkproducts.com/product-catalog/m1-gold-cross-platform-control) security system.

Fully* implements the [Elk M1 RS232 ASCII protocol revision 1.84 (Feb 26, 2016)](./media/ELK-M1_RS232_PROTOCOL_Ver_1.84.pdf). 

*Section 4.3 describes a message called "Send ASCII String To IP Address", with the command "AP". Upper-case commands are supposed to be responses _from_ the M1, but the documentation for this makes it sound like this is a command that can be _sent to_ the M1. I've decided to include it as a response, but haven't fully implemented it because of the unclear documentation.



## Usage

Install with NPM or Yarn

```
npm install elk-message
// or
yarn add elk-message
```

```
import { 
  Arm, 
  ArmingLevel, 
  EthernetModuleTest, 
  UnknownElkResponse, 
  parse,
} from 'elk-message';

// Parse a message

const message = parse('16XK2636115020605110006F\r\n');

if (message instanceof EthernetModuleTest) {
  // EthernetModuleTest is sent every 30 seconds by the M1
  console.log(`M1 ping @ ${message.date}`);
} else if (message instanceof UnknownElkResponse) {
  console.warn(`Recieved unknown command "${message.command}" from M1!`);
}

// Create a message to arm area 1 using code "3456"
const arm = new Arm(ArmingLevel.ArmedAway, 1, '3456');
```

## [API](https://joekrill.github.io/elk-message)

The base interface for all messages sent to or received from the Elk M1 implement `ElkMessage`. 

Messages are either "commands" (`ElkCommand`) sent to the control panel, or "responses" 
(`ElkResponse`) received from it.

See the [API documentation](https://joekrill.github.io/elk-message) for more details on each type of message. 
Each message in the documentation also includes the section in the 
[protocol specification document](./media/ELK-M1_RS232_PROTOCOL_Ver_1.84.pdf)
where it is officially documented.

### Commands

Commands are instantiated directly with specific parameters depending on the type of command. 
Some commands expect the control panel to return a response, others do not. 

* `AlarmByZoneRequest`
* `AlarmReportAcknowledge`
* `AlarmReportTestAcknowledge`
* `Arm`
* `ArmingStatusRequest`
* `AudioCommandIncoming`
* `AudioDataRequest`
* `ControlOutputOff`
* `ControlOutputOn`
* `ControlOutputStatusRequest`
* `ControlOutputToggle`
* `CounterValueRead`
* `CounterValueWrite`
* `CustomValueRead`
* `CustomValueWrite`
* `CustomValuesReadAll`
* `DisplayTextOnScreen`
* `ElkCommand`
* `EthernetModuleTestAcknowledge`
* `InsteonLightingDeviceProgramRequest`
* `InsteonLightingDeviceStatusRequest`
* `KeypadAreaAssigmentsRequest`
* `KeypadFunctionKeyPressRequest`
* `KeypadFunctionKeyStatusRequest`
* `LightingDeviceStatusRequest`
* `Omnistat2Request`
* `PlcDeviceControl`
* `PlcDeviceOff`
* `PlcDeviceOn`
* `PlcDeviceStatusRequest`
* `PlcDeviceToggle`
* `RealTimeClockDataRequest`
* `RealTimeClockDataWrite`
* `SpeakPhrase`
* `SpeakWord`
* `SystemLogDataReadRequest`
* `SystemLogDataWriteRequest`
* `SystemTroubleStatusRequest`
* `TaskActivation`
* `TemperatureDataRequest`
* `TemperatureRequest`
* `TextDescriptionRequest`
* `ThermostatDataRequest`
* `ThermostatSet`
* `ThermostatSetCoolSetPoint`
* `ThermostatSetFan`
* `ThermostatSetHeatSetPoint`
* `ThermostatSetHold`
* `ThermostatSetMode`
* `UserCodeAreasRequest`
* `UserCodeChangeRequest`
* `VersionNumberRequest`
* `ZoneBypassRequest`
* `ZoneDefinitionRequest`
* `ZonePartitionRequest`
* `ZoneStatusRequest`
* `ZoneTrigger`
* `ZoneVoltageRequest`

### Responses

Responses are parsed from their raw packet data (as described in section 4 of the [specification
document](./media/ELK-M1_RS232_PROTOCOL_Ver_1.84.pdf).

A `parse` function is exported that will parse a packet and return it's associated response. 

```
import { parse } from 'elk-message';

const dataPacket = '16XK2636115020605110006F';

// parse will return an instance of `EthernetModuleTest`
const ethernetModuleTest = parse(dataPacket);
assert(ethernetModuleTest instanceof EthernetModuleTest);
```

The parse function will return a `UnknownElkResponse` if the response type was unknown or could not
be determined for some reason (malformed packet, undocumented response, etc...)

* `AlarmByZoneReport`
* `AlarmMemoryUpdate`
* `AlarmReport`
* `AlarmReportTest`
* `ArmingStatusReport`
* `AudioCommandOutgoing`
* `AudioDataReply`
* `ControlOutputStatusReport`
* `CounterValueReply`
* `CustomValueReply`
* `ElkResponse`
* `ElkRPConnected`
* `EmailSendTrigger`
* `EntryExitTimer`
* `EthernetModuleReset`
* `EthernetModuleTest`
* `InstallerModeExited`
* `InsteonLightingDeviceProgrammed`
* `InsteonLightingDeviceStatusReply`
* `KeypadAreaAssignments`
* `KeypadFunctionKeyPressReply`
* `KeypadKeyChange`
* `LightingDeviceDataReply`
* `Omnistat2Reply`
* `OutputChangeUpdate`
* `PlcChangeUpdate`
* `PlcDeviceStatusReply`
* `RealTimeClockDataReply`
* `SendASCIIStringToIPAddress`
* `SystemLogDataUpdate`
* `SystemTroubleStatusReply`
* `TaskChangeUpdate`
* `TemperatureData`
* `TemperatureReply`
* `TextDescriptionReply`
* `ThermostatData`
* `UnknownElkResponse`
* `UserCodeAreasReply`
* `UserCodeChangeReply`
* `UserCodeEntry`
* `VersionNumberReply`
* `ZoneBypassReply`
* `ZoneChangeUpdate`
* `ZoneDefinitionData`
* `ZonePartitionReport`
* `ZoneStatusReport`
* `ZoneVoltageData`


