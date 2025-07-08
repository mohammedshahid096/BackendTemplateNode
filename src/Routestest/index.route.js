const express = require("express");
const ApiV1Routes = require("./api.v1.routes");

// Route config
const IndexRoutes = express.Router();

IndexRoutes.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: "Welcome Message",
  });
});

IndexRoutes.get("/health", (req, res) => {
  let headers = req.headers;
  res.status(200).json({
    success: true,
    message: "Health route  is perfectly working",
    headers,
  });
});

// api v1 routes
IndexRoutes.use("/api/v1", ApiV1Routes);

//----------------------------------------
//--------------- others -----------------
//----------------------------------------
// if no routes findout
IndexRoutes.use("*", (req, res) => {
  res.status(404).json({
    success: false,
    statusCode: 404,
    url: req.baseUrl,
    type: req.method,
    message: "API not found",
  });
});

// export the routes
module.exports = IndexRoutes;
