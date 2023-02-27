const express = require('express');
const router = express.Router();

const DashboardController = require('../controllers/DashboardController');
const {Router} = require('express');

router.get('/', DashboardController.index);
router.get('/dash', DashboardController.dashboard);

module.exports = router;