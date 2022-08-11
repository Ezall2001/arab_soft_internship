/** @format */

const express = require('express')
const {
	get_documents,
	post_document,
	put_acceptDocument,
	put_refuseDocument,
} = require('./document_controller')

const router = express.Router()

router.get('/', get_documents)

router.post('/', post_document)

router.put('/accept/:id', put_acceptDocument)
router.put('/refuse/:id', put_refuseDocument)

module.exports = router
