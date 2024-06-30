const jwt = require("jsonwebtoken");
const {
  ACCESS_TOKEN_KEY,
  ACCESS_TOKEN_KEY_TIME,
  REFRESH_TOKEN_KEY,
  REFRESH_TOKEN_KEY_TIME,
} = require("../Config/index.config");

// generate the access token
module.exports.CreateAcessToken = async (userid) => {
  let payload = {
    id: userid,
  };

  const config = { expiresIn: ACCESS_TOKEN_KEY_TIME };
  const Token = jwt.sign(payload, ACCESS_TOKEN_KEY, config);

  return Promise.resolve(Token);
};

// generate the Refresh token
module.exports.CreateRefeshToken = async (userid) => {
  let payload = {
    id: userid,
  };

  const config = { expiresIn: REFRESH_TOKEN_KEY_TIME };
  const Token = jwt.sign(payload, REFRESH_TOKEN_KEY, config);

  return Promise.resolve(Token);
};

// verifying the access token
module.exports.VerifyAccessToken = async (token) => {
  try {
    let data = jwt.verify(token, ACCESS_TOKEN_KEY);
    return Promise.resolve({ success: true, ...data });
  } catch (error) {
    return Promise.resolve({ success: false, error });
  }
};

// verifying  the refresh token
module.exports.VerifyRefreshToken = async (token) => {
  try {
    let data = jwt.verify(token, REFRESH_TOKEN_KEY);
    return Promise.resolve({ success: true, ...data });
  } catch (error) {
    return Promise.resolve({ success: false, error });
  }
};
