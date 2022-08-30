/**
 * The module imported here ships with CJS & ESM output.
 * The package.json of that module doesnt't have it's export field properly defined.
 * The ESM path of that package doesn't use the .mjs file extenstion so node attempts to interpret the file as CJS.
 * 
 * This can be fixed by renaming this dependencies esm files to use the .mjs extension and
 * adding the following the package.json.
 * 
 * ```
 * {
 *      "exports": {
 *          "require": "./dist/styled-components.cjs.js",
 *          "import": "./dist/styled-components.esm.mjs"
 *      }
 * }
 * ```
 * 
 * For more info on the `exports` field (especially for sub-path exports) see:
 * https://nodejs.org/api/packages.html#package-entry-points 
 * 
 * NOTE: To support a fully Node ESM compatible experience right out of the box - 
 * This has to be done for every sub-dependency that ships with the same issues as well.
 * 
 * E.g: styled-components depends on @emotion/stylis.
 * That means the package.json of @emotion/stylis has to be patched up in the same way.
 * 
 */

import styled, { css } from 'styled-components'

export const DefaultExport = styled.div`content: 'styled';`
export const NamedExport = css`content: 'css'`