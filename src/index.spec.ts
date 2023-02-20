import { verse } from '.';

describe('Bottles tests', () => {
  it('has a test', () => {
    // 99 bottles of milk on the wall, 99 bottles of milk.
    // Take one down and pass it around, 98 bottles of milk on the wall.
    expect(verse(98)).toEqual([
      '98 bottles of milk on the wall, 98 bottles of milk.',
      'Take one down and pass it around, 97 bottles of milk on the wall.',
    ]);
  });
});
