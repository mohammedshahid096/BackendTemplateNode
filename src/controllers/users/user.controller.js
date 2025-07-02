const httpErrors = require("http-errors");
const USER_CONSTANTS = require("../../constants/user.constants");
const logger = require("../../config/logger.config");
const { VerifyPasswordMethod } = require("../../utils/verify.password");
const { CreateAccessToken } = require("../../utils/jwt.token");
const errorHandling = require("../../utils/errorHandling");
const userModel = require("../../schema/users/user.model");

const loginUserController = async (req, res, next) => {
  try {
    logger.info(
      "controller - users - user.controller - loginUserController - start"
    );
    const { password, email } = req.body;

    const userExist = await userModel
      .findOne({ email })
      .select("+password ")
      .lean();

    if (!userExist)
      return next(httpErrors.BadRequest(USER_CONSTANTS.INVALID_EMAIL_PASSWORD));

    // Check if the password is strong
    const isPasswordMatch = await VerifyPasswordMethod(
      password,
      userExist.password
    );

    if (!isPasswordMatch)
      return next(httpErrors.BadRequest(USER_CONSTANTS.INVALID_EMAIL_PASSWORD));

    delete userExist.password;
    const token = await CreateAccessToken(userExist._id, userExist.role);

    logger.info(
      "controller - users - user.controller - loginUserController - end"
    );

    res.status(200).send({
      success: true,
      statusCode: 200,
      message: USER_CONSTANTS.SUCCESSFULLY_USER_LOGIN,
      accessToken: token,
      data: userExist,
    });
  } catch (error) {
    logger.error(
      "controller - users - user.controller - loginUserController - error",
      error
    );
    errorHandling.handleCustomErrorService(error, next);
  }
};

module.exports = {
  loginUserController,
};
