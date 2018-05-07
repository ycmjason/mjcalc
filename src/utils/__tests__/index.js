import { $random } from '../index';

expect.extend({
  toBeWholeNumber(received) {
    if (received % 1 === 0) {
      return {
        message: () => `expected ${received} not to be a whole number`,
        pass: true,
      };
    } else {
      return {
        message: () => `expected ${received} to be a whole number`,
        pass: false,
      };
    }
  },
});

describe('utils', () => {
  describe('$random', () => {
    it('should generate random from 0 to 1 by default', () => {
      Array.from({ length: 1000 }, () => $random()).forEach(x => {
        expect(x).toBeGreaterThanOrEqual(0);
        expect(x).toBeLessThan(1);
      });
    });

    it('should generate random number from 50 to 100', () => {
      Array.from({ length: 1000 }, () => $random(50, 100)).forEach(x => {
        expect(x).toBeGreaterThanOrEqual(50);
        expect(x).toBeLessThan(100);
      });
    });

    describe('$random.rounded', () => {
      it('should round the number', () => {
        Array.from({ length: 1000 }, () => $random.rounded(50, 100)).forEach(x => {
          expect(x).toBeWholeNumber();
        });
      });

      it('should be a number between 50 to 100', () => {
        Array.from({ length: 1000 }, () => $random.rounded(50, 100)).forEach(x => {
          expect(x).toBeGreaterThanOrEqual(50);
          expect(x).toBeLessThanOrEqual(100);
        });
      });
    });
  });
});
