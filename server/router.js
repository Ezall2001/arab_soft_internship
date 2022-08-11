/** @format */

const express = require('express')
const router = express.Router()

const employees_router = require('./Employees/employees_router')
const service_router = require('./service/services_router')
const documents_router = require('./Documents/documents_router')
const conges_router = require('./Conges/conge_router')
const autorisations_router = require('./Autorisations/autorisations_router')

router.use('/employees', employees_router)
router.use('/services', service_router)
router.use('/documents', documents_router)
router.use('/conges', conges_router)
router.use('/autorisations', autorisations_router)

module.exports = router
