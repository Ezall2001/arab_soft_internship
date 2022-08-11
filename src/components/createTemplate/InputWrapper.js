/** @format */

import React from 'react'
import styled from 'styled-components'

const InputWrapper = ({children, className, label, error}) => {
	return (
		<div className={className}>
			<label htmlFor={label}>{label} :</label>

			{children}

			{error && <p className="error">* {error.message}</p>}
		</div>
	)
}

const StyledInputWrapper = styled(InputWrapper)`
	margin: 1rem 2rem;
	width: 100%;

	label {
		display: block;
		text-transform: capitalize;
		margin-bottom: 0.5rem;
	}

	label + * {
		font-size: 0.95rem;
		padding: 0.2rem 0rem 0.2rem 0.8rem;
		background-color: #f1f1f4;
		border: none;
		outline-style: solid;
		outline-width: 1px;
		outline-color: ${({error}) => (error ? '#cc3333' : '#cdcde4')};
		width: 80%;

		&:focus {
			outline-width: 2px;
			outline-color: #1a2e4c;
		}
	}

	.error {
		color: red;
		text-transform: lowercase;
	}
`

export default StyledInputWrapper
