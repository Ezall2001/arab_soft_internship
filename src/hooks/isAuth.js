/** @format */

import {useEffect} from 'react'
import {useNavigate} from 'react-router-dom'

const useIsAuth = () => {
	const navigate = useNavigate()

	useEffect(() => {
		fetch('http://localhost:3000/employees/auth', {
			method: 'GET',
			credentials: 'include',
		})
			.then(data => data.json())
			.then(res => {
				if (!res.auth) navigate('/login')
			})
	}, [navigate])
}

export default useIsAuth
