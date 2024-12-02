export function getPart1Solution(input: string) {
  const left: number[] = [];
  const right: number[] = [];

  for (const line of input.split('\n')) {
    const [l, r] = line.split(/\s+/);
    left.push(Number(l));
    right.push(Number(r));
  }

  left.sort();
  right.sort();

  let distance = 0;

  for (let i = 0; i < left.length; i++) {
    distance += Math.abs(left[i] - right[i]);
  }

  return distance;
}

export function getPart2Solution(input: string) {
  const left: number[] = [];
  const right: number[] = [];

  for (const line of input.split('\n')) {
    const [l, r] = line.split(/\s+/);
    left.push(Number(l));
    right.push(Number(r));
  }

  let score = 0;

  for (const n of left) {
    score += n * right.filter((r) => r === n).length;
  }

  return score;
}

getPart1Solution.sampleSolution = 11;
getPart1Solution.inputSolution = 2086478;
getPart2Solution.sampleSolution = 31;
getPart2Solution.inputSolution = 24941624;
