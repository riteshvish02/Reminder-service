const express = require('express')
const router = express.Router()
const {ticketcontroller} = require('../../controllers')

router.post('/',ticketcontroller.create)

module.exports = router;