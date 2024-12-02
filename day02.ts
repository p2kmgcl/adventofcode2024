function getIsSafe(a: number, b: number) {
  return a !== b && Math.abs(a - b) <= 3;
}

function getIsUp(a: number, b: number) {
  return b > a;
}

function getIsSafeReport(report: number[]) {
  const isUp = getIsUp(report[0], report[1]);
  const isSafe = report
    .slice(0, -1)
    .every(
      (v, i) =>
        getIsSafe(v, report[i + 1]) && isUp === getIsUp(v, report[i + 1]),
    );
  return isSafe;
}

export function getPart1Solution(input: string) {
  const reportList = input
    .split('\n')
    .map((report) => report.split(' ').map((v) => Number(v)));

  return reportList.filter((report) => getIsSafeReport(report)).length;
}

export function getPart2Solution(input: string) {
  const reportList = input
    .split('\n')
    .map((report) => report.split(' ').map((v) => Number(v)));

  return reportList.filter((report) => {
    if (getIsSafeReport(report)) {
      return true;
    }

    for (let i = 0; i < report.length; i++) {
      const updatedReport = [...report];
      updatedReport.splice(i, 1);

      if (getIsSafeReport(updatedReport)) {
        return true;
      }
    }

    return false;
  }).length;
}

getPart1Solution.sampleSolution = 2;
getPart1Solution.inputSolution = 510;
getPart2Solution.sampleSolution = 4;
getPart2Solution.inputSolution = 553;
