/** @format */

import React, {useState} from 'react'
import styled from 'styled-components'
import {useForm} from 'react-hook-form'

import InputItem from './InputItem'
import SelectItem from './SelectItem'
import TextareaItem from './TextareaItem'
import ActionItem from './ActionItem'

const Create = ({inputsObj, actionsObj, apiUrl, className}) => {
	const {
		register,
		handleSubmit,
		setError,
		formState: {errors},
	} = useForm()

	const [success, setSuccess] = useState(false)

	const onSubmit = data => {
		fetch(apiUrl, {
			method: 'POST',
			credentials: 'include',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(data),
		})
			.then(data => data.json())
			.then(res => {
				if (res.status !== 200) {
					res.errors.forEach(err => setError(err.path, {message: err.message}))
					setSuccess(false)
				} else setSuccess(true)
			})
			.catch(console.log)
	}

	return (
		<div className={className}>
			<form onSubmit={handleSubmit(onSubmit)}>
				<div className="inputs">
					{inputsObj.map(inputObj => {
						if (inputObj.type === 'select') {
							return (
								<SelectItem
									{...inputObj}
									register={register}
									key={inputObj.label}
									error={errors[inputObj.label]}
									required
								/>
							)
						} else if (inputObj.type === 'textarea') {
							return (
								<TextareaItem
									{...inputObj}
									register={register}
									key={inputObj.label}
									error={errors[inputObj.label]}
									required
								/>
							)
						} else {
							return (
								<InputItem
									{...inputObj}
									register={register}
									key={inputObj.label}
									error={errors[inputObj.label]}
									required
								/>
							)
						}
					})}
				</div>

				{success && <h3>Donnees Ajouter</h3>}

				<div className="actions">
					{actionsObj.map(actionObj => (
						<ActionItem {...actionObj} key={actionObj.label} />
					))}
				</div>
			</form>
		</div>
	)
}

const StyledCreate = styled(Create)`
	max-width: 50vw;
	min-width: fit-content;
	width: fit-content;
	min-height: fit-content;
	background-color: white;
	margin: 10vh auto 5rem auto;
	padding: 3rem 3.5rem;
	border-radius: 3rem 3rem 5rem 5rem;

	form {
		width: 100%;
		height: 100%;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		align-items: flex-start;

		h3 {
			text-align: center;
			width: 100%;
			margin: 2rem 0;
			color: #33cc59;
		}

		.inputs {
			width: fit-content;
			height: 90%;
			margin: auto;
			display: grid;
			grid-auto-columns: 1fr;
			grid-template-rows: 1fr 1fr 1fr;
			grid-column-gap: 2rem;
			justify-content: center;
			grid-auto-flow: column;
		}

		.actions {
			width: 100%;
			display: flex;
			justify-content: flex-end;
			align-items: center;
		}
	}
`

export default StyledCreate
