import { $random } from '../index';

describe('utils', () => {
  describe('$random', () => {
    let originalRandom = Math.random;

    beforeEach(() => {
      Math.random = jest.fn();
    });

    afterEach(() => {
      Math.random = originalRandom;
    });

    it('should use return a number from Math.random', () => {
      Math.random.mockReturnValue(0.2);
      expect($random()).toBe(0.2);
    });

    it('should generate lower limit in range 50 - 100', () => {
      Math.random.mockReturnValue(0);
      expect($random(50, 100)).toBe(50);
    });

    it('should generate in between in range 50 - 100', () => {
      Math.random.mockReturnValue(0.3);
      expect($random(50, 100)).toBe(50 + 50 * 0.3);
    });

    it('should generate upper limit in range 50 - 100', () => {
      Math.random.mockReturnValue(1);
      expect($random(50, 100)).toBe(100);
    });

    describe('$random.rounded', () => {
      it('should round the number', () => {
        Math.random.mockReturnValue(0.3);
        expect($random.rounded(50, 100)).toBe(Math.round(50 + 50 * 0.3));
      });
    });
  });
});
