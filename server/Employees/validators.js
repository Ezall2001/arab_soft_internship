/** @format */

const mongoose = require('mongoose')
const {lettersOnly, alphaNumeric, minLength} = require('../commonValidators')

const unique_matricule = async matricule => {
	const result = await mongoose.model('Employees').find({matricule})

	if (result.length) return false
	return true
}

const codeService_exists = async codeService => {
	const result = await mongoose.model('Services').findOne({codeService})

	if (result) return true
	return false
}

const nom_validator = [lettersOnly, 'Nom doit contenir seulement des lettres']
const prenom_validator = [
	lettersOnly,
	'Prenom doit contenir seulement des lettres',
]
const matricule_validator = [unique_matricule, 'Matricule doit etre unique']
const username_validator = [
	alphaNumeric,
	'username doit contenir seulement des characters alphanumeric',
]
const password_validator = [
	minLength(8),
	'Mot de passe doit avoir au moins 8 characters',
]
const role_enum = {
	values: ['e', 's', 'r'],
	message: 'Role doit etre une de ces valeurs e-s-r',
}
const codeService_validator = [codeService_exists, 'Code service n existe pas']

module.exports = {
	nom_validator,
	prenom_validator,
	matricule_validator,
	username_validator,
	password_validator,
	role_enum,
	codeService_validator,
}
