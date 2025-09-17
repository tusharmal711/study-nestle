const jwt = require('jsonwebtoken');
const User = require('../models/user');
const authMiddleware = async(req, res, next) => {

  try {
      const token = req.cookies?.token;
   // console.log(token)
      if (!token) {
      throw new Error("token missing")
      }
      //console.log(process.env.JWT_SECRET)
      const payload = jwt.verify(token,  process.env.JWT_KEY);
     // console.log("hi1")
      if (!payload?.id) {
      return res.status(401).json({ message: "Invalid token payload" });
    } 
      req.user=payload;

       const u = await User.findById(payload.id);
      if (!u) return res.status(401).json({ message: "User not found" });
      req.u=u;
      next();
  } catch (err) {
    res.status(401).json({ message: " Invalid or Expired Token" });
  }
};

module.exports=authMiddleware;