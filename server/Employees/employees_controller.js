/** @format */

const fs = require('fs')
const Promise = require('bluebird')
const Employees = require('./employees_model')
const bcrypt = require('bcrypt')

Promise.promisifyAll(fs)

const get_EmployeesByMatricule = async (req, res) => {
	try {
		let result
		if (+req.params.matricule === -1) result = req.user
		else result = await Employees.find({matricule: req.params.matricule})

		res.json({status: 200, data: result})
	} catch (e) {
		res.json({status: 400})
	}
}

const post_testEmployees = async (req, res) => {
	const data = await fs.readFileAsync(
		'./server/test_data/test_employees.json',
		'utf-8',
	)
	const test_employees = await JSON.parse(data)

	const result = await Employees.insertMany(test_employees.data)
	if (result != null) res.send('employees created successfully')
	else res.send('something went wrong', result)
}

const verifyEmployee = async (username, password, done) => {
	try {
		const user = await Employees.findOne({username})
		if (!user) return done(null, false)
		const matchPassword = await bcrypt.compare(password, user.password)
		return matchPassword ? done(null, user) : done(null, false)
	} catch (e) {
		done(e)
	}
}

const logout = (req, res) => {
	req.logout(err => {
		err ? res.json({status: 401}) : res.json({status: 200})
	})
}

const isAuth = (req, res) => {
	if (req.isAuthenticated()) res.json({auth: true})
	else res.json({auth: false})
}

module.exports = {
	get_EmployeesByMatricule,
	post_testEmployees,
	verifyEmployee,
	logout,
	isAuth,
}
