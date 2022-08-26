# ts-cjs-esm-package
Demonstrate building an NPM Package that ships both module formats (CJS / ESM) from a TypeScript Codebase

---

## Repository structure

- [packages/cjs-esm-package](./packages/cjs-esm-package) - An NPM Package built from typescript sources that aims to ship CJS and ESM output.
- [applications/express-ts-cjs](./applications/express-ts-cjs) - A simple node / express web app that is configured to import the CJS version of the `cjs-esm-package`
- [applications/express-ts-esm](./applications/express-ts-esm) - A simple node / express web app that is configured to import the ESM version of the `cjs-esm-package`

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
```
