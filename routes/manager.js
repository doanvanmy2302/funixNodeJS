const express = require('express');

const router = express.Router();

const ManagerController = require('../controllers/manager');

const isAuth = require('../middleware/is-auth');

const isManager = require('../middleware/is-manager');

router.get('/manager', isAuth, isManager, ManagerController.getManager);

router.post('/manager/staff',isAuth, isManager, ManagerController.postManagerStaff);

router.post('/manager/deleteRecord',isAuth, isManager, ManagerController.postDeleteRecord);

router.post('/manager/isConfirm',isAuth, isManager, ManagerController.postIsConfirm);

module.exports = router;
