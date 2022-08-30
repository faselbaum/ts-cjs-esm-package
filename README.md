# !!! DISCLAIMER !!!
**To anyone who might stumble upon this by chance in hopes of a usable template:**

The code in this repo doesn't produce any satisfying / usable output yet.
The ESM path is still mostly broken and anything that works is currently only tested against node.

# ts-cjs-esm-package
Demonstrate building an NPM Package that ships both module formats (CJS / ESM) from a TypeScript Codebase

---

## Repository structure

- [packages/ts-cjs-esm-package](./packages/ts-cjs-esm-package) - An NPM Package built from typescript sources that aims to ship CJS and ESM output.
- [applications/node-ts-cjs](./applications/node-ts-cjs) - A simple node app that is configured to import the CJS version of the `ts-cjs-esm-package`
- [applications/node-ts-esm](./applications/node-ts-esm) - A simple node app that is configured to import the ESM version of the `ts-cjs-esm-package`

This repo utilizes npm workspaces. to run any npm script in one of the workspaces from the root dir use:

```bash
npm run <script name> --workspace=<workspace / package name>
```

## Prequisites

Take a look into the root `package.json`'s `engine` field to see what runtime the code is targeting.

## Getting started

```bash
> npm i

> npm run build

> npm run start
```
