import React from "react";
import ReactDOMServer from "react-dom/server";
import express from "express";

import { Main } from "cjs-esm-package";
import { Deep } from "cjs-esm-package/deep/index"
import { AlsoDeep } from "cjs-esm-package/deep/alsoDeep"


const PORT = process.env.PORT || 3000;
const app = express();

app.get("/", (req, res) => {
  const content = ReactDOMServer.renderToString(
    <div>
      <div>Main: {Main}</div>
      <div>Deep: {Deep}</div>
      <div>AlsoDeep: {AlsoDeep}</div>
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
