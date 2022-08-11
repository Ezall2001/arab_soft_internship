/** @format */

import React, {useEffect} from 'react'
import styled from 'styled-components'
import {useNavigate} from 'react-router-dom'

import ActionItem from './createTemplate/ActionItem'

const Logout = ({className}) => {
	const navigate = useNavigate()

	const navToLogin = () => {
		navigate('/login')
	}

	useEffect(() => {
		fetch('http://localhost:3000/employees/logout', {
			method: 'GET',
			credentials: 'include',
		})
			.then(navigate('/login'))
			.catch(console.log)
	}, [navigate])

	return (
		<div className={className}>
			<h1>Logged out</h1>
			<ActionItem color="#1a2e4c" label="login" onClick={navToLogin} />
		</div>
	)
}

const StyledLogout = styled(Logout)`
	margin: 4rem 3rem;
	h1 {
		margin-bottom: 2rem;
	}

	h1 + * {
		margin-left: 0;
		font-size: 1.1rem;
	}
`

export default StyledLogout
