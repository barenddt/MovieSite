//Imports
const express = require("express");
const morgan = require("morgan");
const chalk = require("chalk");
const debug = require("debug")("app");
const apiRouter = require("./Routes/apiRouter");

//Initialize Express
const app = express();

//Middleware
app.use(express.static("dist"));
app.use(express.json());
app.use(morgan("tiny"));
app.use("/api", apiRouter);

//Listen on PORT
app.listen(8080, () =>
  debug(`Listening on PORT ${chalk.blue(process.env.PORT || 8080)}`)
);
