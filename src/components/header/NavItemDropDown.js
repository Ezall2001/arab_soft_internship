/** @format */

import React from 'react'
import {NavLink} from 'react-router-dom'
import styled from 'styled-components'

const NavItemDropDown = props => {
	return (
		<div className={props.className}>
			<div className="wrapper">
				<NavLink to={props.navName.concat('/creer')}>Nouvelle Demande</NavLink>
				<NavLink to={props.navName.concat('/consulter')}>
					Consulter Demandes
				</NavLink>
			</div>
		</div>
	)
}

const StyledNavItemDropDown = styled(NavItemDropDown)`
	position: absolute;
	top: 100%;
	left: 50%;
	transform: translateX(-50%);
	width: max-content;

	display: flex;
	flex-direction: column;

	.wrapper {
		background-color: #1a2e4c;
		margin-top: 0.8rem;
		padding: 0.8rem 1.3rem 1.3rem 1.3rem;
		border-radius: 1rem 1rem 2rem 2rem;
		text-align: center;

		a {
			margin: 0.9rem 0;
			color: white;
			display: block;
			transition: all 0.15s ease-in-out;
			&:hover {
				color: #ed9d09;
			}
			&.active {
				color: #ed9d09;
			}
		}
	}
`

export default StyledNavItemDropDown
