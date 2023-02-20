const formatBottles = (count: number) => {
  if (count === 0) {
    return `no more bottles`;
  }
  if (count === 1) {
    return `${count} bottle`;
  }

  return `${count} bottles`;
};

export const verse = (currentBottles: number): string[] => [
  `${formatBottles(currentBottles)} of milk on the wall, ${formatBottles(
    currentBottles
  )} of milk.`,
  `Take one down and pass it around, ${formatBottles(
    currentBottles - 1
  )} of milk on the wall.`,
];
