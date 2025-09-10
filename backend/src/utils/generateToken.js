import jwt from "jsonwebtoken";
function generateToken(user) {
  const token = jwt.sign({ id: user._id, role: user.role },
    process.env.JWT_SECRET, {
    expiresIn: "15m", // Token expiration time
  });
  return token;
}

export default generateToken;
