import { oppositeBoolean } from '../src';

describe("Let's make working with arrays easier", () => {
  test('It should test that oppositeValue function returns opposite value of passed argument', () => {
    const value = true;
    const oppositeValue = oppositeBoolean(value)
    expect(oppositeValue).toEqual(false);
  });
});
