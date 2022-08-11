/** @format */

const mongoose = require('mongoose')
const Schema = mongoose.Schema

const {etat_enum} = require('./validators')

const {attachMatricule, attachNumero, attachDate} = require('./middlewares')

const autorisationsSchema = new Schema({
	'matricule': {type: Number, trim: true},
	'date': {type: Date, trim: true},
	'numero': {type: Number, trim: true},
	'etat': {type: String, default: 'ps', enum: etat_enum},
	'date autorisation': {type: Date, required: true, trim: true},
	'heure debut': {type: String, required: true, trim: true},
	'heure fin': {type: String, required: true, trim: true},
	'motif': {type: String, required: true},
})

autorisationsSchema.pre('save', attachMatricule)
autorisationsSchema.pre('save', attachNumero)
autorisationsSchema.pre('save', attachDate)

module.exports = mongoose.model('Autorisations', autorisationsSchema)
