import { Main } from "cjs-esm-package";
import { Deep } from "cjs-esm-package/deep/index"
import { AlsoDeep } from "cjs-esm-package/deep/alsoDeep"

import { Foo } from '#node-ts-esm/foo/index'

console.log(`
-----------
NODE-TS-ESM
-----------
Main: ${Main}
Deep: ${Deep}
AlsoDeep: ${AlsoDeep}
Foo: ${Foo}
`)