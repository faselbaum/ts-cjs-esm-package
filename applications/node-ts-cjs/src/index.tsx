import { Main } from "ts-cjs-esm-package";
import { Deep } from "ts-cjs-esm-package/deep/index"
import { AlsoDeep } from "ts-cjs-esm-package/deep/alsoDeep"
import { DefaultExport, NamedExport } from "ts-cjs-esm-package/deep/improperDualPackageImport"

console.log(`
-----------
NODE-TS-CJS
-----------
Main: ${Main}
Deep: ${Deep}
AlsoDeep: ${AlsoDeep}
ImproperDualPackageImport-DefaultExport: ${DefaultExport}
ImproperDualPackageImport-NamedExport: ${NamedExport}
`)
