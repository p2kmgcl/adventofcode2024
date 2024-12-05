function areEqual<T>(a: T[], b: T[]) {
  return a.length === b.length && a.every((v, i) => v === b[i]);
}

function sum(list: string[][]) {
  return list
    .map((l) => Number(l[Math.floor(l.length / 2)]))
    .reduce((acc, v) => acc + v, 0);
}

function getComparator<T>(ruleList: Array<[T, T]>) {
  return (a: T, b: T) => {
    for (const [ra, rb] of ruleList) {
      if (ra === a && rb === b) {
        return -1;
      } else if (ra === b && rb === a) {
        return 1;
      }
    }
    return 0;
  };
}

export function getPart1Solution(input: string) {
  const [sortRuleString, updateString] = input.split('\n\n');
  const sortRuleList = sortRuleString
    .split('\n')
    .map((l) => l.split('|') as [string, string]);
  const updateList = updateString.split('\n').map((l) => l.split(','));
  const comparator = getComparator(sortRuleList);

  return sum(
    updateList.filter((update) =>
      areEqual(update, update.toSorted(comparator)),
    ),
  );
}

getPart1Solution.sampleSolution = 143;
getPart1Solution.inputSolution = 4872;

export function getPart2Solution(input: string) {
  const [sortRuleString, updateString] = input.split('\n\n');
  const sortRuleList = sortRuleString
    .split('\n')
    .map((l) => l.split('|') as [string, string]);
  const updateList = updateString.split('\n').map((l) => l.split(','));
  const comparator = getComparator(sortRuleList);

  return sum(
    updateList
      .map((update) => update.toSorted(comparator))
      .filter((update, i) => !areEqual(update, updateList[i])),
  );
}

getPart2Solution.sampleSolution = 123;
getPart2Solution.inputSolution = 5564;
