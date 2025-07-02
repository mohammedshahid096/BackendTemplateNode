const express = require("express");
const compression = require("compression");
let moment = require("moment-timezone");
const MongoDataBaseConn = require("./src/config/db.config");
const { DEVELOPMENT_MODE } = require("./src/config/index.config");
const ratelimitConfig = require("./src/config/ratelimit.config");
const corsConfig = require("./src/config/cors.config");
const morganConfigFunction = require("./src/config/morgan.config");
const helmetConfig = require("./src/config/helmet.config");
const IndexRoutes = require("./src/routes/index.route");
const errorHandling = require("./src/utils/errorHandling");
const { runCronSchedulerFunction } = require("./src/config/cron.config");

const app = express();

//----------------------------------------
//------------ config --------------------
//----------------------------------------
// MongoDataBaseConn
MongoDataBaseConn();

if (DEVELOPMENT_MODE === "development") {
  app.use(morganConfigFunction());
} else {
  runCronSchedulerFunction();
}

app.use(helmetConfig);
app.use(ratelimitConfig);
app.use(compression({ level: 6 }));
app.use(express.json({ limit: "1mb" }));
app.use(express.urlencoded({ extended: false }));
app.use(corsConfig);
moment.tz.setDefault("Asia/Kolkata");

// Routes
app.use(IndexRoutes);

// response for error message
app.use((err, req, res, next) => {
  errorHandling.handleMainErrorService(err, res);
});

module.exports = app;
