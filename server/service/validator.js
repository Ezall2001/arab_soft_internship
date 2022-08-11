/** @format */

const {alphaNumeric, numericOnly} = require('../commonValidators')

const nom_validator = [alphaNumeric, 'Nom doit contenir seulement des lettres']
const code_validator = [
	numericOnly,
	'Code doit contenir seulement des chiffres',
]

module.exports = {nom_validator, code_validator}
