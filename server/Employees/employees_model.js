/** @format */
const mongoose = require('mongoose')
const Schema = mongoose.Schema
const {
	nom_validator,
	prenom_validator,
	matricule_validator,
	username_validator,
	password_validator,
	role_enum,
	codeService_validator,
} = require('./validators')
const {hashPasswords} = require('./middlewares')

const employeesSchema = new Schema(
	{
		nom: {
			type: String,
			trim: true,
			required: true,
			validate: nom_validator,
		},
		prenom: {
			type: String,
			trim: true,
			required: true,
			validate: prenom_validator,
		},
		matricule: {
			type: Number,
			required: true,
			validate: matricule_validator,
		},
		username: {
			type: String,
			required: true,
			validate: username_validator,
		},
		password: {
			type: String,
			required: true,
			validate: password_validator,
		},
		role: {
			type: String,
			required: true,
			default: 'e',
			enum: role_enum,
		},
		codeService: {
			type: Number,
			required: true,
			validate: codeService_validator,
		},
	},
	{timeseries: true},
)

employeesSchema.pre('insertMany', hashPasswords)
module.exports = mongoose.model('Employees', employeesSchema)
