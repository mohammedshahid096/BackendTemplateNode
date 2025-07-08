const jwt = require("jsonwebtoken");
const {
  ACCESS_TOKEN_KEY,
  ACCESS_TOKEN_KEY_TIME,
} = require("../configtemp/index.config");

// generate the access token
const createAccessToken = async (userId, role) => {
  if (!userId) return Promise.reject(new Error("User  ID is required"));
  let payload = {
    id: userId,
    role,
  };

  const config = { expiresIn: ACCESS_TOKEN_KEY_TIME };
  const Token = jwt.sign(payload, ACCESS_TOKEN_KEY, config);

  return Promise.resolve(Token);
};

// verifying the access token
const verifyAccessToken = async (token) => {
  try {
    let data = jwt.verify(token, ACCESS_TOKEN_KEY);
    return Promise.resolve({ success: true, ...data });
  } catch (error) {
    return Promise.resolve({ success: false, error });
  }
};

module.exports = {
  createAccessToken,
  verifyAccessToken,
};
