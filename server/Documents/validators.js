/** @format */

const type_enum = {
	values: ['attestation de travail', 'attestation de salaire', 'fiche de paie'],
	message: 'Type incorrect',
}

const etat_enum = {
	values: ['a', 'r', 'ps', 'pr'],
	message: 'Etat incorrect',
}

module.exports = {
	type_enum,
	etat_enum,
}
