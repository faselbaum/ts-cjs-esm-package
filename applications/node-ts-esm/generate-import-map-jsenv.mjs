import { writeImportMapFiles } from "@jsenv/importmap-node-module"

await writeImportMapFiles({
  projectDirectoryUrl: new URL("./", import.meta.url),
  importMapFiles: {
    "./jsenv.node.importmap": {
      mappingsForNodeResolution: true,
      entryPointsToCheck: ["./dist/index.js"],
      magicExtensions: ["inherit", ".js", ".mjs"],
      manualImportMap: {
        imports: {
          "lodash/padEnd": "../../node_modules/lodash-es/padEnd.js",
        },
      },
    },
  }
})