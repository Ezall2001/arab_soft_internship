/** @format */

import React from 'react'
import Create from '../createTemplate/Create'

const inputsObj = [
	{
		label: 'type',
		type: 'select',
		values: [
			'attestation de travail',
			'attestation de salaire',
			'fiche de paie',
		],
	},
]

const actionsObj = [
	{
		label: 'submit',
		type: 'submit',
		color: '#33cc59',
	},
	{
		label: 'reset',
		type: 'reset',
		color: '#1a2e4c',
	},
]

const DocumentCreate = () => {
	return (
		<Create
			inputsObj={inputsObj}
			actionsObj={actionsObj}
			apiUrl="http://localhost:3000/documents"
		/>
	)
}

export default DocumentCreate
