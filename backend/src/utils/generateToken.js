const jwt = require("jsonwebtoken");
function generateToken(user) {
  const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
    expiresIn: "15m", // Token expiration time
  });
  return token;
}

module.exports = generateToken;
