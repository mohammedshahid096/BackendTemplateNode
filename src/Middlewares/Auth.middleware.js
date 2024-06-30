const httpErrors = require("http-errors");
const { VerifyAccessToken } = require("../Utils/jwt.token");

// for authentication
module.exports.Authentication = async (req, res, next) => {
  try {
    const { access_token, refresh_token } = req.cookies;
    if (!access_token) {
      return next(httpErrors.Unauthorized(errorConstant.NOT_AUTHENTICATED));
    }

    const decode = await VerifyAccessToken(access_token);
    if (!decode.success) {
      res.clearCookie("access_token");
      res.clearCookie("refresh_token");
      return next(httpErrors.Unauthorized(decode.error.message));
    }

    // let user = await redis.get(decode.id);
    // if (!user) {
    //   return next(httpErrors.NotFound());
    // }
    // user = JSON.parse(user);
    // req.userid = user?._id;
    // req.role = user?.role;
    // req.name = user?.name;

    // console.log(`req name: ${user.email} role:${user.role}`);
    next();
  } catch (error) {
    next(httpErrors.InternalServerError(error.message));
  }
};

// authorization depending  upon a role
module.exports.Authorization = (...roles) => {
  return (req, res, next) => {
    if (!roles.includes(req.role)) {
      res.clearCookie("access_token");
      res.clearCookie("refresh_token");
      return next(httpErrors.Unauthorized(errorConstant.NOT_AUTHORIZED));
    }
    next();
  };
};
