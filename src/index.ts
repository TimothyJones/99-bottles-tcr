export const verse = (currentBottles: number): string[] => [
  `${currentBottles} bottles of milk on the wall, ${currentBottles} bottles of milk.`,
  `Take one down and pass it around, ${
    currentBottles - 1
  } bottles of milk on the wall.`,
];
