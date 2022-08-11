/** @format */

import React, {useState} from 'react'
import styled from 'styled-components'

import DetailsButton from './DetailsButton'
import {AcceptButton, RefuseButton} from './ActionButton'

const ConsultItem = ({className, data, role, apiUrl}) => {
	const [viewData, setViewData] = useState(data.slice(1, -1).slice(0, 6))
	const [isExpended, setIsExpended] = useState(false)

	const openDetailView = () => {
		isExpended ? setViewData(data.slice(1, -1).slice(0, 6)) : setViewData(data)
		setIsExpended(isExpended => !isExpended)
	}

	const setEtat = newEtat => {
		const newViewData = [...viewData].map(item => {
			if (item.key === 'etat') item.value = newEtat
			return item
		})

		setViewData(newViewData)
	}

	return (
		<div className={className}>
			<ul>
				{viewData.map(item => (
					<li key={item.key}>
						<span>{item.key} :</span> {item.value}
					</li>
				))}
			</ul>
			<DetailsButton toogleView={openDetailView} isViewExpanded={isExpended} />
			<RefuseButton
				etat={viewData.filter(item => item.key === 'etat')[0].value}
				role={role}
				setEtat={setEtat}
				itemId={data[0].value}
				apiUrl={apiUrl}
			/>
			<AcceptButton
				etat={viewData.filter(item => item.key === 'etat')[0].value}
				role={role}
				setEtat={setEtat}
				itemId={data[0].value}
				apiUrl={apiUrl}
			/>
		</div>
	)
}

const StyledConsultItem = styled(ConsultItem)`
	width: 100%;
	border-radius: 1.5rem;
	border: 2px solid #8595ad;
	padding: 1.5rem 2rem;
	margin-bottom: 2rem;
	background-color: #f0f2f5;

	ul {
		text-transform: capitalize;
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		grid-auto-flow: row;
		justify-content: center;
		grid-row-gap: 1rem;
		grid-column-gap: 1rem;
		margin-bottom: 2rem;
		font-size: 1.2rem;

		span {
			color: #d6a75c;
		}
	}

	button {
		float: right;
		border: none;
		text-transform: uppercase;
		text-align: center;
		margin-left: 1rem;
		font-size: 0.9rem;
		padding: 0.5rem 1rem;
		transition: all 0.15s ease-out;
		cursor: pointer;
	}
`

export default StyledConsultItem
