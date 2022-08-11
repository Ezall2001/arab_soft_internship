/** @format */

const mongoose = require('mongoose')
const Schema = mongoose.Schema

const {etat_enum, seance_enum} = require('./validators')

const {
	attachMatricule,
	attachNumero,
	attachDate,
	attachNombreJours,
} = require('./middlewares')

const congesSchema = new Schema({
	'matricule': {type: Number, trim: true},
	'date': {type: Date, trim: true},
	'numero': {type: Number, trim: true},
	'etat': {type: String, default: 'ps', enum: etat_enum},
	'motif': {type: String, trim: true},
	'date debut': {type: Date, trim: true, required: true},
	'date fin': {type: Date, trim: true, required: true},
	'nombre jours': {type: Number, trim: true},
	'seance debut': {type: String, trim: true, required: true, enum: seance_enum},
	'seance fin': {type: String, trim: true, required: true, enum: seance_enum},
})

congesSchema.pre('save', attachMatricule)
congesSchema.pre('save', attachNumero)
congesSchema.pre('save', attachDate)
congesSchema.pre('save', attachNombreJours)

module.exports = mongoose.model('Conges', congesSchema)
