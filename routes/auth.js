const express = require("express");
const { signUp, checkEmail, logIn, refreshToken, postUser, logOut, getUserDetails, userProfileDetails, userProfileAbout, uploadProfileImage, userToHost, addWishlist } = require("../controllers/authController.js");
const { verifyJwtToken } = require("../middleware/jwt.js");
const router = express.Router();
const authController = require('../controllers/authController');
router.use(express.json())

router.post("/signup", authController.signUp)
router.post("/login", authController.logIn)
router.post("/logout", verifyJwtToken, logOut)
router.post("/getuserdetails", verifyJwtToken, getUserDetails)
router.post("/post", verifyJwtToken, postUser)
router.post("/uploadimage", verifyJwtToken, uploadProfileImage)
router.post("/becomeahost", verifyJwtToken, userToHost)

router.post("/refreshtoken", authController.refreshToken)
router.post("/checkemail", authController.checkEmail)
router.post("/profiledetails", verifyJwtToken, userProfileDetails)
router.post("/profiledetailsabout", verifyJwtToken, userProfileAbout)

module.exports = router;