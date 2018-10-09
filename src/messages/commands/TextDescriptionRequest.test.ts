import TextDescriptionRequest from './TextDescriptionRequest';
import TextDescriptionType from '../../enums/TextDescriptionType';

describe('TextDescriptionRequest', () => {
  let textDescriptionsRequest: TextDescriptionRequest;

  describe('for area 1', () => {
    beforeEach(() => {
      textDescriptionsRequest = new TextDescriptionRequest(TextDescriptionType.AreaName, 1);
    });

    it('generates the expected raw message', () => {
      expect(textDescriptionsRequest.raw).toBe('0Bsd010010065\r\n');
    });
  });
});
