/** @format */

import React from 'react'
import Create from '../createTemplate/Create'

const date = new Date()
const currDate = date.toISOString().split('T')[0]

const inputsObj = [
	{
		label: 'date debut',
		type: 'date',
		defaultValue: currDate,
	},
	{
		label: 'date fin',
		type: 'date',
		defaultValue: currDate,
	},
	{
		label: 'seance debut',
		type: 'select',
		values: ['matin', 'apres-midi'],
	},
	{
		label: 'seance fin',
		type: 'select',
		values: ['matin', 'apres-midi'],
	},
	{
		label: 'motif',
		type: 'textarea',
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

const CongeeCreate = () => {
	return (
		<div>
			<Create
				inputsObj={inputsObj}
				actionsObj={actionsObj}
				apiUrl="http://localhost:3000/conges"
			/>
		</div>
	)
}

export default CongeeCreate
