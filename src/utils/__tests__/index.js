import { $random } from '../index';

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
          // make sure it is whole number
          expect(x % 1).toBe(0);
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
