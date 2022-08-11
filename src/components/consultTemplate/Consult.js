/** @format */

import React, {useState, useEffect} from 'react'
import styled from 'styled-components'

import ConsultItem from './ConsultItem'
import dataFormatter from './dataFormatter'

const Consult = ({className, apiUrl}) => {
	const [role, setRole] = useState('e')
	const [data, setData] = useState([])

	useEffect(() => {
		fetch('http://localhost:3000/employees/getByMatricule/-1', {
			method: 'GET',
			credentials: 'include',
			headers: {
				'Content-Type': 'application/json',
			},
		})
			.then(data => data.json())
			.then(res => {
				if (res.status === 200) setRole(res.data.role)
			})
	})

	useEffect(() => {
		fetch(apiUrl, {
			method: 'GET',
			credentials: 'include',
			headers: {
				'Content-Type': 'application/json',
			},
		})
			.then(data => data.json())
			.then(res => {
				if (res.status === '200') setData(dataFormatter(res.data))
			})
			.catch(console.log)
	}, [apiUrl])

	return (
		<div className={className}>
			<div className="filters"></div>
			<div className="items-wrapper">
				{data.map(item => (
					<ConsultItem
						key={item[0].value}
						apiUrl={apiUrl}
						data={item}
						role={role}
					/>
				))}
			</div>
		</div>
	)
}

const StyledConsult = styled(Consult)`
	height: fit-content;
	width: fit-content;
	max-width: 50vw;
	margin: 5rem auto;
	padding: 3rem 2rem;
	background-color: white;
	border-radius: 3rem 3rem 5rem 5rem;

	.items-wrapper {
		width: fit-content;
		display: flex;
		flex-direction: column;
		flex-wrap: nowrap;
		align-items: flex-start;
		justify-content: center;
	}
`

export default StyledConsult
