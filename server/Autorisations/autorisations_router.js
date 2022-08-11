/** @format */

const express = require('express')
const {
	get_autorisations,
	post_autorisation,
	put_acceptAutorisation,
	put_refuseAutorisation,
} = require('./autorisations_controller')

const router = express.Router()

router.get('/', get_autorisations)

router.post('/', post_autorisation)

router.put('/accept/:id', put_acceptAutorisation)
router.put('/refuse/:id', put_refuseAutorisation)

module.exports = router
