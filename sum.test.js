import sum from './sum';

const test = test('adds 1 + 2 to equal 3', () => {
  const expect = expect(sum(1, 2)).toBe(3);
});
