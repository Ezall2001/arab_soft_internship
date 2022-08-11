/** @format */

const express = require('express')
const {
	get_conges,
	post_conge,
	put_acceptConge,
	put_refuseConge,
} = require('./conge_controller')

const router = express.Router()

router.get('/', get_conges)

router.post('/', post_conge)

router.put('/accept/:id', put_acceptConge)
router.put('/refuse/:id', put_refuseConge)

module.exports = router
