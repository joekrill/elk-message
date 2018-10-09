import ElkResponse from './ElkResponse';

describe('ElkResponse', () => {
  describe('Valid packet', () => {
    let elkResponse: ElkResponse;

    beforeEach(() => {
      elkResponse = new ElkResponse('1EAS100000004000000030000000000E\r\n');
    });

    it('has `isWellFormed` to false', () => {
      expect(elkResponse.isWellFormed).toBe(true);
    });

    it('has `isChecksumValid` to false', () => {
      expect(elkResponse.isChecksumValid).toBe(true);
    });

    it('has `isPacketLengthValid` to false', () => {
      expect(elkResponse.isPacketLengthValid).toBe(true);
    });

    it('has the expected command', () => {
      expect(elkResponse.command).toBe('AS');
    });
  });

  describe('Invalid packet', () => {
    let elkResponse: ElkResponse;

    beforeEach(() => {
      elkResponse = new ElkResponse('XXXXX');
    });
    it('has `isWellFormed` to false', () => {
      expect(elkResponse.isWellFormed).toBe(false);
    });
  });

  describe('Incorrect checksum', () => {
    // Should be `0E`, not `0F`
    const raw = '1EAS100000004000000030000000000F\r\n';
    let elkResponse: ElkResponse;

    beforeEach(() => {
      elkResponse = new ElkResponse(raw);
    });

    it('has `isWellFormed` === true', () => {
      expect(elkResponse.isWellFormed).toBe(true);
    });

    it('has `isChecksumValid` === false', () => {
      expect(elkResponse.isChecksumValid).toBe(false);
    });
  });

  describe('Incorrect packet length', () => {
    // Should be `1E`, not `AA`
    const raw = 'AAAS100000004000000030000000000E\r\n';
    let elkResponse: ElkResponse;

    beforeEach(() => {
      elkResponse = new ElkResponse(raw);
    });

    it('has `isWellFormed` === true', () => {
      expect(elkResponse.isWellFormed).toBe(true);
    });

    it('has `isPacketLengthValid` === false', () => {
      expect(elkResponse.isPacketLengthValid).toBe(false);
    });
  });

  describe('Incorrect packet length and checksum', () => {
    // Should be `1E`, not `CC` for length, and `0E` (or `FE`, depending on
    // whether the invalid length value is used) not `DD` for checksum
    const raw = 'CCAS10000000400000003000000000DD\r\n';
    let elkResponse: ElkResponse;

    beforeEach(() => {
      elkResponse = new ElkResponse(raw);
    });

    it('has `isWellFormed` === true', () => {
      expect(elkResponse.isWellFormed).toBe(true);
    });

    it('has `isPacketLengthValid` === false', () => {
      expect(elkResponse.isPacketLengthValid).toBe(false);
    });

    it('has `isChecksumValid` === false', () => {
      expect(elkResponse.isChecksumValid).toBe(false);
    });
  });

  describe('empty packet', () => {
    let elkResponse: ElkResponse;

    beforeEach(() => {
      elkResponse = new ElkResponse('');
    });

    it('has `command` == null', () => {
      expect(elkResponse.command).toBeNull();
    });
  });
});
