import ElkCommand from './ElkCommand';

/**
 * 4.42.1 Zone Trigger (zt)
 *
 * This command allows a 3rd party integration device to trigger
 * an alarm condition on a EOL hardwired zone defined with any
 * of the Burglary zone types and many other zone types up to
 * zone type 26. This command creates a virtual momentary open
 * condition on the zone as if the EOL hardwired loop had been
 * physically opened. This requires M1 Version 4.5.23, 5.1.23
 * or later. Caution: This command cannot create a virtual short
 * condition and therefore cannot trigger an alarm condition for
 * zone types that require a short. i.e. Fire zone alarms cannot
 * be triggered.
 */
export default class ZoneTrigger extends ElkCommand {
  constructor(readonly zoneNumber: number) {
    super('z', 't', zoneNumber.toString().padStart(3, '0'));
  }
}
