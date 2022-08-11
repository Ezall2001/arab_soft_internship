/** @format */

import React from 'react'
import styled from 'styled-components'
import InputWrapper from './InputWrapper'

const SelectItem = ({
	label,
	className,
	register,
	required,
	values,
	error,
	...kwargs
}) => {
	return (
		<InputWrapper label={label} error={error}>
			<select
				className={className}
				id={label}
				{...register(label, {required})}
				{...kwargs}
			>
				{values.map(value => (
					<option value={value} key={value}>
						{value}
					</option>
				))}
			</select>
		</InputWrapper>
	)
}

const StyledSelectItem = styled(SelectItem)`
	text-transform: capitalize;
`

export default StyledSelectItem
