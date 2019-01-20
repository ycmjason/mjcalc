import { when } from 'jest-when';
import { asleep, random } from '../index';

describe('utils/index', () => {
  describe('asleep', () => {
    it('should return a promise that resolves after the timeout', async () => {
      jest.spyOn(window, 'setTimeout');

      when(window.setTimeout)
        .calledWith(expect.any(Function), 300)
        .mockImplementation((fn) => fn('resolved!'));

      const p = asleep(300);
      expect(p).toBeInstanceOf(Promise);
      expect(await p).toBe('resolved!');
    });
  });

  describe('random', () => {
    it('should return a number at lowest range', () => {
      jest.spyOn(Math, 'random');
      Math.random.mockReturnValue(0);
      expect(random(-10.5, 10.5)).toBe(-10.5);
    });

    it('should return a number at highest range', () => {
      jest.spyOn(Math, 'random');
      Math.random.mockReturnValue(1);
      expect(random(-10.9, 10.1)).toBe(10.1);
    });

    it('should return a number at middle range', () => {
      jest.spyOn(Math, 'random');
      Math.random.mockReturnValue(0.54);
      expect(random(-10, 10)).toBe(-10 + 20 * 0.54);
    });
  });

  describe('random.rounded', () => {
    it('should return a number at lowest range', () => {
      jest.spyOn(Math, 'random');
      Math.random.mockReturnValue(0);
      expect(random.rounded(-10.5, 10.3)).toBe(-11);
    });

    it('should return a number at highest range', () => {
      jest.spyOn(Math, 'random');
      Math.random.mockReturnValue(0.9999);
      expect(random.rounded(-10, 10)).toBe(10);
    });

    it('should return a number at middle range', () => {
      jest.spyOn(Math, 'random');
      Math.random.mockReturnValue(0.125);
      expect(random.rounded(-10, 10)).toBe(-8);
    });
  });
});
