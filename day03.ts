export function getPart1Solution(input: string) {
  const regexp = /mul\((\d{1,3}),(\d{1,3})\)/g;
  let total = 0;

  while (true) {
    const result = regexp.exec(input);
    if (!result) break;
    const [, a, b] = result;
    total += Number(a) * Number(b);
  }

  return total;
}

getPart1Solution.sampleSolution = 161;
getPart1Solution.inputSolution = 182780583;

export function getPart2Solution(input: string) {
  const mulRegExp = /^mul\((\d{1,3}),(\d{1,3})\)/;
  const doRegExp = /^do\(\)/;
  const dontRegExp = /^don't\(\)/;
  let shouldMultiply = true;
  let total = 0;

  for (let i = 0; i < input.length; i++) {
    const slice = input.slice(i);

    const doResult = doRegExp.exec(slice);
    if (doResult) {
      shouldMultiply = true;
      const [doStr] = doResult;
      i += doStr.length - 1;
      continue;
    }

    const dontResult = dontRegExp.exec(slice);
    if (dontResult) {
      shouldMultiply = false;
      const [dontStr] = dontResult;
      i += dontStr.length - 1;
      continue;
    }

    const mulResult = mulRegExp.exec(slice);
    if (mulResult) {
      const [mulStr, a, b] = mulResult;
      if (shouldMultiply) {
        total += Number(a) * Number(b);
      }
      i += mulStr.length - 1;
      continue;
    }
  }

  return total;
}

getPart2Solution.sampleSolution = 48;
getPart2Solution.inputSolution = 90772405;
