import React from "react";
const ReactDOMServer = await import("react-dom/server.js");
import express from "express";

import { Main } from "cjs-esm-package";
import { Deep } from "cjs-esm-package/deep/index"
import { AlsoDeep } from "cjs-esm-package/deep/alsoDeep"

import { Foo } from '#express-ts-esm/foo/index'

const PORT = process.env.PORT || 3000;
const app = express();

app.get("/", (req, res) => {
  const content = ReactDOMServer.renderToString(
    <div>
      <div>Main: {Main}</div>
      <div>Deep: {Deep}</div>
      <div>AlsoDeep: {AlsoDeep}</div>
      <hr></hr>
      <div>#Foo: {Foo}</div>
    </div>
  );

  return res.send(`
        <html>
            <body>
                ${content}
            </body>
        </html>
    `);
});

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
