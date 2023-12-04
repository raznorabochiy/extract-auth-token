import fs from "fs/promises";

export async function loadLines(fileName: string) {
  const file = await fs.readFile(fileName, { encoding: "utf8" });

  return file.split("\n").filter(Boolean).map((item) => item.trim());
}

const lines = await loadLines('base64.txt');

for (const line of lines) {
  try {
    const encodedStr = atob(line);
    const data = JSON.parse(encodedStr);
    const auth_token = data.find(item => item.name === 'auth_token')['value'];
    console.log(`auth_token: ${auth_token}`);
  } catch (e) {
    console.log(`Error: ${e.message}`);
  }  
}
