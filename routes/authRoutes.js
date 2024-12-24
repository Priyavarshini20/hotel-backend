const express = require("express");
const { signUp, checkEmail, logIn, refreshToken, postUser, logOut, getUserDetails, userProfileDetails, userProfileAbout, uploadProfileImage, userToHost, addWishlist } = require("../controllers/authController.js");
const { verifyJwtToken } = require("../middleware/jwt.js");
const authRouter = express.Router();
const authController = require('../controllers/authController.js');
//Router.use(express.json())

authRouter.post("/signup", authController.signUp)
authRouter.post("/login", authController.logIn)
authRouter.post("/logout", verifyJwtToken, logOut)
authRouter.post("/getuserdetails", verifyJwtToken, getUserDetails)
authRouter.post("/post", verifyJwtToken, postUser)
authRouter.post("/uploadimage", verifyJwtToken, uploadProfileImage)
 authRouter.post("/becomeahost", verifyJwtToken, userToHost)

authRouter.post("/refreshtoken", authController.refreshToken)
authRouter.post("/checkemail", authController.checkEmail)
authRouter.post("/profiledetails", verifyJwtToken, userProfileDetails)
authRouter.post("/profiledetailsabout", verifyJwtToken, userProfileAbout)

module.exports = authRouter;