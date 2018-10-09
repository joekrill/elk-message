import TextDescriptionReply from './TextDescriptionReply';
import TextDescriptionType from '../../enums/TextDescriptionType';

describe('TextDescriptionReply', () => {
  describe('parses', () => {
    describe('Example 1', () => {
      const raw = '1BSD01001Front DoorKeypad0089\r\n';
      let textDescriptionReply: TextDescriptionReply;

      beforeEach(() => {
        textDescriptionReply = new TextDescriptionReply(raw);
      });

      it('reports the expected values', () => {
        expect(textDescriptionReply.textType).toBe(TextDescriptionType.AreaName);
        expect(textDescriptionReply.address).toBe(1);
        expect(textDescriptionReply.text).toBe('Front DoorKeypad');
      });
    });

    describe('Example 2', () => {
      const raw = '1BSD05001Garage Door 0005\r\n';
      let textDescriptionReply: TextDescriptionReply;

      beforeEach(() => {
        textDescriptionReply = new TextDescriptionReply(raw);
      });

      it('reports the expected values', () => {
        expect(textDescriptionReply.textType).toBe(TextDescriptionType.TaskName);
        expect(textDescriptionReply.address).toBe(1);
        expect(textDescriptionReply.text).toBe('Garage Door');
      });
    });

    describe('show on keypad bit set', () => {
      const raw = '1BSD05001ÁBCDEF      0005\r\n';
      let textDescriptionReply: TextDescriptionReply;

      beforeEach(() => {
        textDescriptionReply = new TextDescriptionReply(raw);
      });

      it('reports the expected values', () => {
        expect(textDescriptionReply.text).toBe('ABCDEF');
      });
    });
  });
});
