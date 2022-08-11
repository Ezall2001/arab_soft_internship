/** @format */

const mongoose = require('mongoose')

function attachMatricule(next, {user_matricule}) {
	this.matricule = user_matricule
	next()
}

function attachNumero(next, {user_matricule}) {
	mongoose
		.model('Conges')
		.find({matricule: user_matricule})
		.sort({_id: -1})
		.limit(1)
		.then(data => {
			if (data.length === 0) this.numero = 1
			else this.numero = data[0].numero + 1
			next()
		})
}

function attachDate(next, {user_matricule}) {
	this.date = new Date()
	next()
}

function attachNombreJours(next, {user_matricule}) {
	const diff = this['date fin'].getTime() - this['date debut'].getTime()
	this['nombre jours'] = Math.ceil(diff / (1000 * 3600 * 24))

	next()
}

module.exports = {attachMatricule, attachNumero, attachDate, attachNombreJours}
