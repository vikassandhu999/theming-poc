import fs from "fs/promises";
import { execSync } from "child_process";

const directoryPath = "./scss";

try {
  const files = await fs.readdir(directoryPath);

  files.forEach((file: string) => {
    console.log(file);
    if (!file.startsWith("_") && file.endsWith(".scss")) {
      const theme = file.replace(".scss", "");
      execSync(`THEME=${theme} bun run build:theme`);
    }
  });
} catch (err) {
  console.error("Error while reading dir: ", err);
}
