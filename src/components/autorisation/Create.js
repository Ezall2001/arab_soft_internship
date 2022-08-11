/** @format */

import React from 'react'
import Create from '../createTemplate/Create'

const date = new Date()

const currTime =
	(date.getHours() < 10 ? '0' : '') + date.getHours() + ':' + date.getMinutes()

const currDate = date.toISOString().split('T')[0]

const inputsObj = [
	{
		label: 'date autorisation',
		type: 'date',
		defaultValue: currDate,
	},
	{
		label: 'heure debut',
		type: 'time',
		defaultValue: currTime,
	},
	{
		label: 'heure fin',
		type: 'time',
		defaultValue: currTime,
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

const AutorisationCreate = () => {
	return (
		<div>
			<Create
				inputsObj={inputsObj}
				actionsObj={actionsObj}
				apiUrl="http://localhost:3000/autorisations"
			/>
		</div>
	)
}

export default AutorisationCreate
