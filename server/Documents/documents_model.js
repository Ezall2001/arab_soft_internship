/** @format */

const mongoose = require('mongoose')
const Schema = mongoose.Schema

const {type_enum, etat_enum} = require('./validators')

const {attachMatricule, attachNumero, attachDate} = require('./middlewares')

const documentsSchema = new Schema({
	matricule: {type: Number, trim: true},
	date: {type: Date, trim: true},
	numero: {type: Number, trim: true},
	type: {type: String, trim: true, required: true, enum: type_enum},
	etat: {type: String, default: 'ps', enum: etat_enum},
})

documentsSchema.pre('save', attachMatricule)
documentsSchema.pre('save', attachNumero)
documentsSchema.pre('save', attachDate)

module.exports = mongoose.model('Documents', documentsSchema)
