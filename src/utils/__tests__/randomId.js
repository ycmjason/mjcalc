import randomId from '../randomId';
import { $random } from '../index';

describe('utils/randomId', () => {
  beforeEach(() => {
    $random.rounded = jest.fn();
    $random.rounded
      .mockReturnValueOnce('a'.charCodeAt(0))
      .mockReturnValueOnce('g'.charCodeAt(0))
      .mockReturnValueOnce('k'.charCodeAt(0))
      .mockReturnValueOnce('j'.charCodeAt(0));
  });

  it('should return the agkj as mocked', () => {
    expect(randomId()).toEqual('agkj');
  });
});
