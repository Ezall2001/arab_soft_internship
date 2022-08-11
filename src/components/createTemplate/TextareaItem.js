/** @format */

import React from 'react'
import styled from 'styled-components'
import InputWrapper from './InputWrapper'

const TextareaItem = ({
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
			<textarea
				className={className}
				type={type}
				id={label}
				{...kwargs}
				{...register(label, {required})}
			/>
		</InputWrapper>
	)
}

const StyledTextareaItem = styled(TextareaItem)``

export default StyledTextareaItem
