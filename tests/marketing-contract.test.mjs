import assert from "node:assert/strict";
import { readdir, readFile } from "node:fs/promises";
import { extname, join } from "node:path";
import test from "node:test";
import { fileURLToPath } from "node:url";

const sourceRoot = fileURLToPath(new URL("../src/", import.meta.url));
const sourceExtensions = new Set([".css", ".ts", ".tsx"]);

async function sourceFiles(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  const files = await Promise.all(
    entries.map((entry) => {
      const path = join(directory, entry.name);
      return entry.isDirectory() ? sourceFiles(path) : [path];
    }),
  );

  return files.flat().filter((file) => sourceExtensions.has(extname(file)));
}

async function sourceText() {
  const files = await sourceFiles(sourceRoot);
  return (await Promise.all(files.map((file) => readFile(file, "utf8")))).join(
    "\n",
  );
}

test("marketing content contains no placeholder destinations or retired claims", async () => {
  const source = await sourceText();

  for (const forbidden of [
    'href="#"',
    "http://localhost",
    "https://localhost",
    "Warden AI",
    "Discord",
    "X / Twitter",
  ]) {
    assert.equal(
      source.includes(forbidden),
      false,
      `found forbidden content: ${forbidden}`,
    );
  }
});

test("the landing page has one primary heading and uses every product screenshot", async () => {
  const source = await sourceText();
  const headingCount = source.match(/<h1(?:\s|>)/g)?.length ?? 0;

  assert.equal(headingCount, 1);
  assert.match(source, /screenshots\.incidents/);
  assert.match(source, /screenshots\.releases/);
  assert.match(source, /screenshots\.teams/);
});

test("canonical project links use public HTTPS destinations", async () => {
  const siteModule = await readFile(
    new URL("../src/lib/site.ts", import.meta.url),
    "utf8",
  );

  assert.match(siteModule, /https:\/\/github\.com\/opswarden-git\/opswarden/);
  assert.match(siteModule, /https:\/\/opswarden-git\.github\.io\/opswarden\//);
  assert.match(siteModule, /https:\/\/opswarden\.dev/);
  assert.match(siteModule, /https:\/\/app\.opswarden\.dev/);
  assert.equal(siteModule.includes("localhost"), false);
});

test("desktop downloads resolve through platform routes without a pinned release", async () => {
  const siteModule = await readFile(
    new URL("../src/lib/site.ts", import.meta.url),
    "utf8",
  );

  for (const route of ["windows", "macos", "linux", "linux-deb"]) {
    assert.match(siteModule, new RegExp(`/download/${route}`));
  }

  assert.equal(/releases\/tag\/v\d/.test(siteModule), false);
  assert.match(siteModule, /releases\/latest/);
});
