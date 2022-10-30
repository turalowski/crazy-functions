import { lastItemOfArray } from '../src';

describe("Let's make working with arrays easier", () => {
  test('It should find last item of array', () => {
    const items = [1, 2, 3, 4, 5];
    const lastItem = lastItemOfArray(items);
    expect(lastItem).toEqual(5);
  });
});
