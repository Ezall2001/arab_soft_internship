/** @format */

const mongoose = require('mongoose')
const Schema = mongoose.Schema
const {nom_validator, code_validator} = require('./validator')

const serviceSchema = new Schema(
	{
		nom: {
			type: String,
			required: true,
			validate: nom_validator,
		},
		code: {
			type: Number,
			required: true,
			validate: code_validator,
		},
	},
	{timeseries: true},
)

const Services = mongoose.model('Services', serviceSchema)
module.exports = Services
