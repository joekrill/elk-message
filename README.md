# elk-message

[![styled with prettier](https://img.shields.io/badge/styled_with-prettier-ff69b4.svg)](https://github.com/prettier/prettier)
[![Greenkeeper badge](https://badges.greenkeeper.io/joekrill/elk-message.svg)](https://greenkeeper.io/)
[![Travis](https://travis-ci.org/joekrill/elk-message.svg?branch=master)](https://travis-ci.org/joekrill/elk-message)
[![Coveralls](https://coveralls.io/repos/github/joekrill/elk-message/badge.svg)](https://coveralls.io/github/joekrill/elk-message)
[![Dev Dependencies](https://david-dm.org/joekrill/elk-message/dev-status.svg)](https://david-dm.org/joekrill/elk-message?type=dev)

A module for parsing and generating messages for the [Elk M1](https://www.elkproducts.com/product-catalog/m1-gold-cross-platform-control) security system.

Fully* implements the Elk M1 RS232 ASCII protocol revision 1.84 (Feb 26, 2016). 

*Section 4.3 describes a message called "Send ASCII String To IP Address", with the command "AP". Upper-case commands are supposed to be responses _from_ the M1, but the documentation for this makes it sound like this is a command that can be _sent to_ the M1. I've decided to include it as a response, but haven't fully implemented it because of the unclear documentation.

### Usage

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
