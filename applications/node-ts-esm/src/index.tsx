import { Main } from "ts-cjs-esm-package";
import { Deep } from "ts-cjs-esm-package/deep/index.mjs"
import { AlsoDeep } from "ts-cjs-esm-package/deep/alsoDeep.mjs"
import { DefaultExport, NamedExport } from "ts-cjs-esm-package/deep/improperDualPackageImport.mjs"

import { Foo } from '#node-ts-esm/foo/index'

console.log(`
-----------
NODE-TS-ESM
-----------
Main: ${Main}
Deep: ${Deep}
AlsoDeep: ${AlsoDeep}
ImproperDualPackageImport-DefaultExport: ${DefaultExport}
ImproperDualPackageImport-NamedExport: ${NamedExport}

Foo: ${Foo}
`)