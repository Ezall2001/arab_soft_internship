/** @format */

import React from 'react'
import styled from 'styled-components'
import InputWrapper from './InputWrapper'

const InputItem = ({
	type,
	label,
	className,
	register,
	required,
	error,
	...kwargs
}) => {
	return (
		<InputWrapper label={label} error={error}>
			<input
				className={className}
				type={type}
				id={label}
				{...kwargs}
				{...register(label, {required})}
			/>
		</InputWrapper>
	)
}

const StyledInputItem = styled(InputItem)``

export default StyledInputItem
