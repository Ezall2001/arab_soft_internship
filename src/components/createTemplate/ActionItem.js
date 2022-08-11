/** @format */

import React from 'react'
import styled from 'styled-components'

const ActionItem = ({label, type, className, ...kwargs}) => {
	return (
		<>
			{type === 'submit' || type === 'reset' ? (
				<input type={type} value={label} className={className} {...kwargs} />
			) : (
				<button className={className} {...kwargs}>
					{label}
				</button>
			)}
		</>
	)
}

const StyledActionItem = styled(ActionItem)`
	background-color: ${({color}) => color};
	outline-color: ${({color}) => color};
	outline-width: 2px;
	outline-style: solid;
	border: none;
	color: white;
	cursor: pointer;
	text-transform: uppercase;
	text-align: center;
	margin-left: 1rem;
	font-size: 0.9rem;
	padding: 0.5rem 1rem;
	transition: all 0.15s ease-out;

	&:hover {
		background-color: white;
		color: ${({color}) => color};
	}
`

export default StyledActionItem
