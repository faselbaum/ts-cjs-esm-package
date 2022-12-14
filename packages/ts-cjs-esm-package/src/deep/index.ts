/**
 * This module imports a library that only comes with CJS support.
 * These imports will be re-mapped to an esm version of the package in a post-build step using babel.
 * This post-build step is only executed for the ESM output of our library.
 * 
 * see: packages/ts-cjs-esm-package/babel.esm.config.json
 */
import padEnd from '#compat/lodash/padEnd'
import lodash, { padStart } from '#compat/lodash/main.entry'

const deep = lodash.padEnd(padStart('Deep'))
export const Deep = padEnd(deep)