# browser-esm

An example showcasing how to run the `ts-cjs-esm-package` directly in your browser using [import-maps](https://github.com/WICG/import-maps#scope).
No build steps needed. 

## Usage

```Bash
> npm i
> npm run build
> npm run start
```

Peek into the browsers dev tools (network tab, console) to see what's being loaded.

Please use the latest version of Chrome or a browser that has import maps enabled.
https://caniuse.com/import-maps

## Explanation

- The `ts-cjs-esm-package` is being imported directly into the browser by the [./public/index.mjs](./public/index.mjs) module.
- All import specifiers inside any of the modules dependencies need to be mapped to a file url on the server. See the `<script type="importmap" />` tag inside [./public/index.html](./public/index.html).
- Dependencies are installed locally using npm. The `node_modules` dir is sym-linked to `./public/dependencies` and served through the http-server package.

### Disclaimer
Not all dependencies are correctly mapped to ESM compatible equivalents yet.

## ToDo

- Find and map ESM versions of some of the packages inside the dependency tree.