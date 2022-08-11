/** @format */

import React from 'react'
import styled from 'styled-components'
import {useNavigate} from 'react-router-dom'

const NotFound = props => {
	const navigate = useNavigate()

	return (
		<div className={props.className}>
			<h1>404 Page Not Found</h1>
			<button onClick={() => navigate(-1)}>Go Back</button>
		</div>
	)
}

const StyledNotFound = styled(NotFound)`
	margin-left: 2rem;
	margin-top: 4rem;

	h1 {
		font-size: 2rem;
		margin-bottom: 1.5rem;
		color: white;
	}

	button {
		font-size: 1.3rem;
		background-color: #1a2e4c;
		border: none;
		color: white;
		padding: 0.8rem 1.5rem;
		cursor: pointer;
		transition: all 0.15s ease-out;

		&:hover {
			background-color: white;
			color: #1a2e4c;
		}
	}
`

export default StyledNotFound
