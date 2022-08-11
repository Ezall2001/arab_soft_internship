/** @format */

import React from 'react'
import {Outlet} from 'react-router-dom'

import useIsAuth from '../../hooks/isAuth'

const Autorisation = () => {
	useIsAuth()

	return (
		<div>
			<Outlet />
		</div>
	)
}

export default Autorisation
