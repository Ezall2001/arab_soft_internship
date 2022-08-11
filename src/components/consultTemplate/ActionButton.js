/** @format */

import React from 'react'
import styled from 'styled-components'

import getStyle from './ActionButtonStyles'

const ActionButton = ({className, type, setEtat, itemId, apiUrl, children}) => {
	const handleClick = () => {
		const apiEndPoint =
			apiUrl + (type === 'a' ? '/accept/' : '/refuse/') + itemId

		fetch(apiEndPoint, {
			method: 'PUT',
			credentials: 'include',
			headers: {
				'Content-Type': 'application/json',
			},
		})
			.then(data => data.json())
			.then(res => {
				if (res.status === 200) {
					if (res.etat === 'r') setEtat('refuse')
					else if (res.etat === 'a') setEtat('accepte')
					else if (res.etat === 'ps') setEtat('en attente superviseur')
					else if (res.etat === 'pr') setEtat('en attente RH')
				}
			})
			.catch(console.log)
	}

	return (
		<button className={className} onClick={handleClick}>
			{children}
		</button>
	)
}

const StyledActionButton = styled(ActionButton)`
	${getStyle}
	outline: 2px solid ${({color}) => color};

	&:hover {
		background-color: ${({color}) => color};
		color: white;
	}
`

const AcceptButton = props => (
	<StyledActionButton color="#33cc59" type="a" {...props}>
		Accepter
	</StyledActionButton>
)
const RefuseButton = props => (
	<StyledActionButton color="#cc3333" type="r" {...props}>
		Refuser
	</StyledActionButton>
)

export {AcceptButton, RefuseButton}
