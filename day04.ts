export function getPart1Solution(input: string) {
  const grid = input.split('\n').map((line) => line.split(''));
  const word = 'XMAS'.split('');
  let frequency = 0;

  for (let x = 0; x < grid.length; x++) {
    for (let y = 0; y < grid[x].length; y++) {
      for (const dx of [-1, 0, 1]) {
        for (const dy of [-1, 0, 1]) {
          const matches = word.every((c, i) => {
            const row = grid[x + dx * i];
            return row && c === row[y + dy * i];
          });

          if (matches) {
            frequency++;
          }
        }
      }
    }
  }

  return frequency;
}

getPart1Solution.sampleSolution = 18;
getPart1Solution.inputSolution = 2593;

export function getPart2Solution(input: string) {
  const grid = input.split('\n').map((line) => line.split(''));
  let frequency = 0;

  for (let x = 1; x < grid.length - 1; x++) {
    for (let y = 1; y < grid[x].length - 1; y++) {
      if (grid[x][y] !== 'A') {
        continue;
      }

      if (
        grid[x - 1][y - 1] === 'M' &&
        grid[x + 1][y + 1] === 'S' &&
        grid[x - 1][y + 1] === 'M' &&
        grid[x + 1][y - 1] === 'S'
      ) {
        frequency++;
      }

      if (
        grid[x - 1][y - 1] === 'S' &&
        grid[x + 1][y + 1] === 'M' &&
        grid[x - 1][y + 1] === 'S' &&
        grid[x + 1][y - 1] === 'M'
      ) {
        frequency++;
      }

      if (
        grid[x - 1][y - 1] === 'M' &&
        grid[x + 1][y + 1] === 'S' &&
        grid[x - 1][y + 1] === 'S' &&
        grid[x + 1][y - 1] === 'M'
      ) {
        frequency++;
      }

      if (
        grid[x - 1][y - 1] === 'S' &&
        grid[x + 1][y + 1] === 'M' &&
        grid[x - 1][y + 1] === 'M' &&
        grid[x + 1][y - 1] === 'S'
      ) {
        frequency++;
      }
    }
  }

  return frequency;
}

getPart2Solution.sampleSolution = 9;
getPart2Solution.inputSolution = 1950;
