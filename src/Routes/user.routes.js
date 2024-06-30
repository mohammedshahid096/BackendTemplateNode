const express = require("express");

const UserRoutes = express.Router();

UserRoutes.route("/login").post((req, res) => {
  res.status(200).json({ success: true });
});

module.exports = UserRoutes;
