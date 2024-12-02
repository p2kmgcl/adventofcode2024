import { assertEquals } from "@std/assert";

const LINE_LENGTH = 25;

export function readFile(filePath: string) {
  const decoder = new TextDecoder("utf8");
  const data = Deno.readFileSync(filePath);
  return decoder.decode(data).trim();
}

export function fileExists(filePath: string) {
  try {
    Deno.statSync(filePath);
    return true;
  } catch (_error) {
    return false;
  }
}

for (let i = 1; i <= 24; i++) {
  const day = i.toString().padStart(2, "0");

  if (!fileExists(`./day${day}.ts`)) {
    console.log(
      `Day ${day}`.padEnd(LINE_LENGTH, " "),
      `⏭️ (missing day${day}.ts file)`,
    );
    continue;
  }

  const module = await import(`./day${day}.ts`);

  for (const part of [1, 2]) {
    for (const variation of ["sample", "input"]) {
      const fileName = `./day${day}.${variation}.txt`;
      const functionName = `getPart${part}Solution`;
      const solutionName = `${variation}Solution`;
      const testName = `Day ${day} Part ${part} ${variation}`.padEnd(
        LINE_LENGTH,
        " ",
      );

      if (!fileExists(fileName)) {
        console.log(`${testName} ⏭️ (missing ${fileName} input file)`);
        continue;
      }

      if (!(functionName in module)) {
        console.log(`${testName} ⏭️ (missing ${functionName} function)`);
        continue;
      }

      if (!(solutionName in module[functionName])) {
        console.log(
          `${testName} ⏭️ (missing ${functionName}.${solutionName} expected solution)`,
        );
        continue;
      }

      const fileContent = readFile(fileName);
      const begin = performance.now();
      const actual = module[functionName](fileContent);
      const end = performance.now();
      const expected = module[functionName][solutionName];

      try {
        assertEquals(expected, actual);
        console.log(testName, "✅", ` (in ${(end - begin).toFixed(2)}ms)`);
      } catch (error) {
        console.log(testName, "💥");
        console.error(error);
      }
    }
  }
}
