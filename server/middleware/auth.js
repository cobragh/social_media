import jwt from "jsonwebtoken";

export const verifyToken = async (req, res, next) => {
  try {
    let token = req.header("authorization");

    if (!token) {
      return res.status(403).json("Acess Denied");
    }

    if (token.startWith("Bearer ")) {
      token = token.slice(7, token.length).trimLeft();
    }
    const verify = jwt.verify(token, process.env.JWT_SECRET);
    req.user = verified;
    next();
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
