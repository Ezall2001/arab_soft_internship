/** @format */

import React from 'react'
import styled from 'styled-components'

const DetailsButton = ({toogleView, className}) => {
	return (
		<button className={className} onClick={toogleView}>
			Details
		</button>
	)
}

const StyledDetailsButton = styled(DetailsButton)`
	outline: 2px solid #1a2e4c;
	background-color: ${({isViewExpanded}) =>
		isViewExpanded ? '#1a2e4c' : '#f0f2f5'};
	color: ${({isViewExpanded}) => (isViewExpanded ? 'white' : '#1a2e4c')};

	&:hover {
		background-color: #1a2e4c;
		color: white;
	}
`

export default StyledDetailsButton
