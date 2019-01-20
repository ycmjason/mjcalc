import { when } from 'jest-when';

import {
  shuffle,
  sort,
} from '../array';

import { random } from '../index';

jest.mock('../index');

describe('utils/array', () => {
  describe('shuffle', () => {
    let xs;

    beforeEach(() => {
      xs = [1, 2, 3];
      when(random).calledWith(-0.5, 0.5).mockReturnValue(0.5);
    });

    it('should not modify original array and return new one', () => {
      const shuffled = shuffle(xs);
      expect(xs).toEqual([1, 2, 3]);
      expect(shuffled).not.toBe(xs);
    });

    it('should shuffle as expected', () => {
      const shuffled = shuffle(xs);
      expect(shuffled).toEqual([3, 2, 1]);
    });
  });

  describe('sort', () => {
    let xs;
    beforeEach(() => {
      xs = [1, 2, 3];
    });

    it('should not modify original array and return new one', () => {
      const sorted = sort(xs);
      expect(xs).toEqual([1, 2, 3]);
      expect(sorted).not.toBe(xs);
    });

    it('should sort', () => {
      const mockCmpFn = () => {};
      jest.spyOn(Array.prototype, 'sort');

      when(Array.prototype.sort)
        .calledWith(mockCmpFn)
        .mockReturnValue([2, 1, 3]);

      expect(sort(xs, mockCmpFn)).toEqual([2, 1, 3]);
    });
  });
});
