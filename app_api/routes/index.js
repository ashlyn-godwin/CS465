const express = require('express');
const router = express.Router();

const authController = require('../controllers/authentication');
const tripsController = require('../controllers/trips');

// const auth = jwt({
//     secret: process.env.JWT_SECRET,
//     userProperty: "payload",
//     algorithms: ["HS256"],
//   });

router
    .route('/login') //Currently 404s I don't know why
    .post(authController.login);
router
    .route('/register')
    .post(authController.register);
router
    .route('/trips')
    .get(tripsController.tripsList)
    .post(tripsController.tripsAddTrip);
router
    .route('/trips/:tripCode')
    .get(tripsController.tripsFindCode);
module.exports = router;