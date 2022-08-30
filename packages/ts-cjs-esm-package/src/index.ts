/**
 * Relative imports will be transformed using a post-build step using the `tsc-esm-fix` npm package.
 * This transform will only be run for the ESM output of our library.
 */
export * from './deep/index.js'

export const Main = 'Main'