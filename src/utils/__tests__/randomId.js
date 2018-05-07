import randomId from '../randomId';
import { $random } from '../index';

jest.mock('../index', () => ({
  $random: {
    rounded: jest.fn(),
  },
}));

describe('utils/randomId', () => {
  beforeEach(() => {
    $random.rounded.mockReset();
    $random.rounded
      .mockReturnValueOnce('a'.charCodeAt(0))
      .mockReturnValueOnce('g'.charCodeAt(0))
      .mockReturnValueOnce('k'.charCodeAt(0))
      .mockReturnValueOnce('j'.charCodeAt(0));
  });

  it('should return the agkj as mocked', () => {
    expect(randomId()).toEqual('agkj');
  });

  it('should return the agkj as mocked', () => {
    randomId();

    expect($random.rounded).toHaveBeenCalledWith('a'.charCodeAt(0), 'z'.charCodeAt(0));
  });
});
