const formatBottles = (count: number) =>
  count === 1 ? `${count} bottle` : `${count} bottles`;

export const verse = (currentBottles: number): string[] => [
  `${formatBottles(currentBottles)} of milk on the wall, ${formatBottles(
    currentBottles
  )} of milk.`,
  `Take one down and pass it around, ${formatBottles(
    currentBottles - 1
  )} of milk on the wall.`,
];
