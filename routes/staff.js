const express = require('express');

const staffController = require('../controllers/staff');
const annualLeaveController = require('../controllers/annualleave');
const salaryController = require('../controllers/salary');
const covidController = require('../controllers/covid')

const router = express.Router();

router.get('/',staffController.getIndex);

router.get('/timekeeping', staffController.getTimeKeeping);

router.get('/staff-info', staffController.getStaff);

router.post('/edit-staff-image', staffController.postEditStaffImage);

router.post('/start-working', staffController.postStartWorking);

router.post('/end-working', staffController.postEndWorking);

router.post('/annual-leave', annualLeaveController.postAnnualLeave);

router.get('/salary', salaryController.getSalary);

router.post('/month-salary', salaryController.postMonthSalary);

router.get('/covid', covidController.getCovid);

router.post('/covid/body-temperature', covidController.postBodyTemp);

router.post('/covid/vaccine', covidController.postVaccine);

router.post('/covid/test-result', covidController.postTestResult);

module.exports = router;