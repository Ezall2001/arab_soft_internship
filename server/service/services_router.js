/** @format */

const express = require('express')
const {
	get_serviceByCode,
	post_service,
	post_testServices,
	delete_all,
} = require('./services_controller')

const router = express.Router()

router.get('/:code', get_serviceByCode)

router.post('/', post_service)
router.post('/test', post_testServices)

router.delete('/', delete_all)

module.exports = router
