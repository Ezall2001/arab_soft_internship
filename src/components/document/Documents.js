/** @format */

import React from 'react'
import {Outlet} from 'react-router-dom'
import useIsAuth from '../../hooks/isAuth'

const Documents = () => {
	useIsAuth()

	return (
		<div>
			<Outlet />
		</div>
	)
}

export default Documents
