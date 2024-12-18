const express = require("express");
const { verifyJwtToken } = require("../middleware/jwt.js");
const { getStripePublishableKey, createPaymentIntent, newReservation, getAllReservations, getAuthorsReservations } = require("../controllers/reservationController.js");
const router = express.Router();
const reservationController = require('../controllers/reservationController');

router.use(express.json())

router.get("/config", getStripePublishableKey)
router.get("/getauthorreservations", verifyJwtToken, getAuthorsReservations)

router.post("/getreservations", reservationController.getAllReservations)
router.post("/createpaymentintent", reservationController.createPaymentIntent)
router.post("/booking", verifyJwtToken, newReservation)



module.exports = router;