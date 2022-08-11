/** @format */

import React from 'react'
import styled from 'styled-components'

import {ReactComponent as Waves} from '../assets/waves.svg'

const Backround = ({className}) => {
	return (
		<div className={className}>
			<Waves />
		</div>
	)
}

const StyledBackground = styled(Backround)`
	position: absolute;
	z-index: -1;
	top: 0;
	left: 0;
	margin-top: 7rem;

	svg {
		display: block;
		width: 100%;
		height: 100%;
		transform: scale(100%, 120%);
	}
`

export default StyledBackground
