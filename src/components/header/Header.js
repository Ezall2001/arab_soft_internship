/** @format */

import React, {useEffect, useState} from 'react'
import styled from 'styled-components'
import {useLocation, useNavigate} from 'react-router-dom'

import logo from '../../assets/logo_svg.svg'
import NavItem from './NavItem'
import ActionItem from '../createTemplate/ActionItem'

const Header = props => {
	const [isLoggedIn, setIsLoggedIn] = useState(false)
	const [userName, setUsername] = useState('')
	const location = useLocation()
	const navigate = useNavigate()

	const navToLogout = () => navigate('/logout')

	useEffect(() => {
		if (location.pathname === '/login') setIsLoggedIn(false)
		else if (location.pathname !== '/login' && !isLoggedIn) {
			fetch('http://localhost:3000/employees/getByMatricule/-1', {
				method: 'GET',
				credentials: 'include',
				headers: {
					'Content-Type': 'application/json',
				},
			})
				.then(res => res.json())
				.then(data => {
					if (data.status !== 200) return
					setUsername(data.data.nom + ' ' + data.data.prenom)
					setIsLoggedIn(true)
				})
		}
	}, [location, isLoggedIn])

	return (
		<header className={props.className}>
			<img src={logo} alt="Logo" />

			{isLoggedIn && (
				<>
					<div className="profile">
						<h2>{userName}</h2>
						<ActionItem color="#1a2e4c" label="logout" onClick={navToLogout} />
					</div>

					<nav>
						<NavItem defaultActive={true}>Documents</NavItem>
						<NavItem>Congés</NavItem>
						<NavItem>Autorisations</NavItem>
					</nav>
				</>
			)}
		</header>
	)
}

const StyledHeader = styled(Header)`
	padding: 1rem 2rem;
	background-color: white;
	display: flex;
	justify-content: space-between;
	align-items: center;

	img {
		width: 20rem;
		height: auto;
	}

	nav {
		display: flex;
		justify-content: flex-end;
		align-items: center;
	}

	.profile {
		width: fit-content;
		h2 {
			text-transform: capitalize;
			margin-bottom: 1rem;
			font-size: 1.6rem;
			color: #1a2e4c;
		}
		h2 + * {
			width: 100%;
			margin-left: 0;
		}
	}
`

export default StyledHeader
