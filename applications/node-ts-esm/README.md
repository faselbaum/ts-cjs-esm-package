# express-ts-esm

This is a simple node / express app to demonstrate the usage of the `cjs-esm-package` from inside this repo.

This application is configured to import the ESM version that the package attempts to ship.

## ISSUES

Any attempts to generate import-maps currently fail.

e.g. `npm run generate:importmap:jspm`

Any attempts to start this application currently fail.

e.g. `start:importmap:jspm`