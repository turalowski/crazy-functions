import firstItemOfArray from '../src/first-item-of-array';

describe("Let's make working with arrays easier", () => {
  test('It should find first item of array', () => {
    const items = [1, 2, 3, 4, 5];
    const firstItem = firstItemOfArray(items);
    expect(firstItem).toEqual(1);
  });
});
