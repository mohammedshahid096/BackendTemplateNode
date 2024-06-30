const express = require("express");
const UserRoutes = require("./user.routes");

// Route config
const IndexRoutes = express.Router();

//  using a routes
IndexRoutes.use("/user", UserRoutes);

// export the routes
module.exports = IndexRoutes;
