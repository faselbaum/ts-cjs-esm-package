import { Generator } from '@jspm/generator';
import fs from 'fs'

const generator = new Generator({
  mapUrl: import.meta.url,
  defaultProvider: 'nodemodules',
  // custom user provided mappings, which are authoritative
  inputMap: {
    imports: {
      'lodash': '../../node_modules/lodash-es/lodash.js',
      'lodash/padEnd': '../../node_modules/lodash-es/padEnd.js'
    }
  },
  // Always ensure to define your target environment to get a working map
  // it is advisable to pass the "module" condition as supported by Webpack
  env: ['module'],
});

// where "pkg" is already installed into node_modules and package.json "dependencies" by npm
await generator.traceInstall('cjs-esm-package');

// output the full import map
const output = JSON.stringify(generator.getMap(), null, 2)
fs.writeFileSync('./jspm.node.importmap', output)