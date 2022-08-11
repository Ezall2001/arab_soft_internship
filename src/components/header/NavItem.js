/** @format */

import React from 'react'
import {NavLink} from 'react-router-dom'
import styled from 'styled-components'

import NavItemDropDown from './NavItemDropDown'

const NavItem = props => {
	const navName = props.children.toLowerCase().replace('é', 'e')

	return (
		<div className={props.className}>
			<NavLink to={navName}>{props.children}</NavLink>
			<NavItemDropDown className="dropDown" navName={navName} />
		</div>
	)
}

const StyledNavItem = styled(NavItem)`
	margin: 0 1rem;
	position: relative;

	& > a {
		color: 'black';
		font-size: 1.2rem;
		transition: all 0.15s ease-out;
		&.active {
			color: #ed9d09;
		}
	}

	li {
		user-select: none;
	}

	.dropDown {
		display: none;
	}

	&:hover {
		.dropDown {
			display: block;
		}
	}
`
export default StyledNavItem
