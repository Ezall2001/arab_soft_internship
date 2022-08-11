/** @format */

import React, {useState} from 'react'
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css'
import styled from 'styled-components'

const Calender = ({className}) => {
	const [value, setValue] = useState(new Date())

	return (
		<div className={className}>
			<Calendar value={value} onChange={setValue} />
		</div>
	)
}

const StyledCalender = styled(Calender)`
	position: absolute;
	left: 2vw;
	top: 50%;
	transform: translateY(-50%);

	& > * {
		border-radius: 2rem;
		padding: 1rem;
		transform: scale(90%);
	}

	@media only screen and (max-width: 1200px) {
		display: none;
	}
`

export default StyledCalender
