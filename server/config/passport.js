/** @format */

const passport = require('passport')
const JsonStrategy = require('passport-json')
const Employee = require('../Employees/employees_model')
const {verifyEmployee} = require('../Employees/employees_controller')

const customFields = {
	usernameProp: 'username',
	passwordProp: 'password',
}

passport.use(new JsonStrategy(customFields, verifyEmployee))

passport.serializeUser((user, done) => done(null, user.id))

passport.deserializeUser(async (userId, done) => {
	try {
		const user = await Employee.findById(userId)
		if (!user) return done(null, false)
		else return done(null, user)
	} catch (e) {
		return done(e)
	}
})
