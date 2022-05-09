const path = require('path');

const express = require('express');

const shopController = require('../controllers/shop');

const router = express.Router();

router.get('/', staffController.getTimeKeeping);

router.get('/staff-info', staffController.getStaff);

router.post('/edit-staff-image', staffController.postEditStaffImage);

router.post('/start-working', staffController.postStartWorking);

router.post('/end-working', staffController.postEndWorking);

router.post('/annual-leave', annualLeaveController.postAnnualLeave);

module.exports = router;
