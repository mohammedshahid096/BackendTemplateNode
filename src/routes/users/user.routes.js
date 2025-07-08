const express = require("express");
const {
  loginUserController,
} = require("../../controllers/users/user.controller");
const { loginUserValidation } = require("../../validators/users/user.joi");

const UserRoutes = express.Router();

UserRoutes.route("/login").post(loginUserValidation, loginUserController);

module.exports = UserRoutes;
