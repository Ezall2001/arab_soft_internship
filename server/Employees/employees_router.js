/** @format */

const express = require('express')
const passport = require('passport')
const {
	get_EmployeesByMatricule,
	post_testEmployees,
	isAuth,
	logout,
} = require('./employees_controller')

const router = express.Router()

router.get('/auth', isAuth)
router.get('/logout', logout)
router.get('/login/failed', (req, res) => res.json({status: 401}))
router.get('/login/success', (req, res) => res.json({status: 200}))
router.get('/getByMatricule/:matricule', get_EmployeesByMatricule)

router.post(
	'/login',
	passport.authenticate('json', {
		failureRedirect: '/employees/login/failed',
		successRedirect: '/employees/login/success',
	}),
)
router.post('/test', post_testEmployees)

module.exports = router
