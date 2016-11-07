/// <reference path="../../typings/index.d.ts" />

import * as express from "express";

let staticBasePath = "./www";

let app: express.Application = express();

app.use(express.static(staticBasePath, {"index": false}));
app.listen(8080)  