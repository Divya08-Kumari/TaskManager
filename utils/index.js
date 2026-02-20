// import jwt from "jsonwebtoken";

// const createJWT = (res, userId) => {
//   const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
//     expiresIn: "1d",
//   });

//   res.cookie("token", token, {
//     httpOnly: true,
//     secure: process.env.NODE_ENV !== "development", // Use secure cookies in production
//     sameSite: "none", // Prevent CSRF attacks
//     maxAge: 1 * 24 * 60 * 60 * 1000, // 1 days
//   });
// };

// export default createJWT;

import jwt from "jsonwebtoken";

const createJWT = (res, userId) => {
  try {
    const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
      expiresIn: "1d", // expires in 1 day
    });

    res.cookie("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV !== "development", // true in production
      sameSite: process.env.NODE_ENV !== "development" ? "none" : "lax", // secure for cross-site in prod
      maxAge: 24 * 60 * 60 * 1000, // 1 day in ms
    });

    return token; // optional but helpful for debugging or testing
  } catch (error) {
    console.error("❌ JWT creation failed:", error.message);
  }
};

export default createJWT;

