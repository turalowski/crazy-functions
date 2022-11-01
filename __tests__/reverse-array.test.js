import { reverseArray } from '../src';

describe("Let's make working with arrays easier", () => {
  test('It should return reversed version of passed array', () => {
    const items = [1, 2, 3, 4, 5];
    const reversedArray = reverseArray(items);
    expect(reversedArray).toEqual([5,4,3,2,1]);
  });
});
