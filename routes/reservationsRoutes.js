const express = require("express");
const { verifyJwtToken } = require("../middleware/jwt.js");
const { getStripePublishableKey, createPaymentIntent, newReservation, getAllReservations, getAuthorsReservations } = require("../controllers/reservationController.js");
const reservationsRouter = express.Router();
const reservationController = require('../controllers/reservationController.js');

//router.use(express.json())

reservationsRouter.get("/config", getStripePublishableKey)
reservationsRouter.get("/getauthorreservations", verifyJwtToken, getAuthorsReservations)

reservationsRouter.post("/getreservations", reservationController.getAllReservations)
reservationsRouter.post("/createpaymentintent", reservationController.createPaymentIntent)
reservationsRouter.post("/booking", verifyJwtToken, newReservation)



module.exports = reservationsRouter;