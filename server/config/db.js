/** @format */

const mongoose = require('mongoose')

const {DB_URI} = process.env

const connect = async () => {
	await mongoose.connect(DB_URI, {
		useUnifiedTopology: true,
		useNewUrlParser: true,
		autoIndex: true,
		connectTimeoutMS: 2000,
	})
}

module.exports = connect
