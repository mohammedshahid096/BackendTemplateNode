const httpErrors = require("http-errors");

module.exports.LoginUserController = async (req, res, next) => {
  try {
    // login here
  } catch (error) {
    httpErrors.InternalServerError(error.message);
  }
};
