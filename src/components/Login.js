/** @format */

import React from 'react'
import styled from 'styled-components'
import {useForm} from 'react-hook-form'
import {useNavigate} from 'react-router-dom'

import InputItem from './createTemplate/InputItem'
import ActionItem from './createTemplate/ActionItem'

const Login = ({className}) => {
	const {
		register,
		handleSubmit,
		setError,
		formState: {errors},
	} = useForm()
	const navigate = useNavigate()

	const onSubmit = data => {
		fetch('http://localhost:3000/employees/login', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(data),
			credentials: 'include',
		})
			.then(data => data.json())
			.then(res => {
				if (res.status === 200) navigate('/documents')
				else if (res.status === 401) {
					setError('username', {
						type: 'custom',
						message: '',
					})
					setError('password', {
						type: 'custom',
						message: 'username et/ou password incorrect',
					})
				}
			})
			.catch(console.log)
	}

	return (
		<div className={className}>
			<h1>Authentification</h1>

			<form onSubmit={handleSubmit(onSubmit)}>
				<InputItem
					type="text"
					label="username"
					register={register}
					defaultValue="armenbakir"
					required
					error={errors.username}
				/>
				<InputItem
					type="password"
					label="password"
					register={register}
					defaultValue="armen_bakir"
					required
					error={errors.password}
				/>

				<ActionItem type="submit" color="#1a2e4c" label="login" />
			</form>
		</div>
	)
}

const StyledLogin = styled(Login)`
	width: fit-content;
	margin: 15vh auto 0 auto;
	padding: 3rem 4rem;
	background-color: white;
	border-radius: 3rem 3rem 5rem 5rem;

	h1 {
		margin-bottom: 3rem;
		color: #1a2e4c;
		text-align: center;
	}

	form > * {
		margin-left: 0;
	}

	input[type='submit'] {
		margin-top: 2rem;
	}
`

export default StyledLogin
