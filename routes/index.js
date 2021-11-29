const express = require('express')
const router = express.Router()
const authRoutes = require('./auth')
const analyticsRoutes = require('./analytics')
const categoryRoutes = require('./category')
const orderRoutes = require('./order')
const positionRoutes = require('./position')

router.use('/auth', authRoutes)
router.use('/analytics', analyticsRoutes)
router.use('/category', categoryRoutes)
router.use('/order', orderRoutes)
router.use('/position', positionRoutes)

module.exports = router;