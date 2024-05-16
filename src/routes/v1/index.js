const express = require('express');
const router = express.Router();
const {infocontroller} = require("../../controllers")
const ticketRoutes = require('./ticketroute')
router.get('/info',infocontroller.info);
router.use('/tickets',ticketRoutes)
module.exports = router;