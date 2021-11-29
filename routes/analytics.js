const express = require('express');
const router = express.Router();
const { AnalyticsController } = require('../controllers');

router.get('/overview', AnalyticsController.Overview);
router.get('/analytics', AnalyticsController.Analytic);

module.exports = router;
