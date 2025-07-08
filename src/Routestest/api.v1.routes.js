const express = require("express");
const UserRoutes = require("./users/user.routes");

// Route config
const ApiV1Routes = express.Router();

// ----------------------------------------
//  user  routes
// ----------------------------------------
ApiV1Routes.use("/user", UserRoutes);

// export the routes
module.exports = ApiV1Routes;
