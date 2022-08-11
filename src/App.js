/** @format */

import {Routes, Route, Navigate} from 'react-router-dom'
import {GlobalStyle} from './components/styles/global'
import React from 'react'

import Backround from './components/Backround'
import Login from './components/Login'
import Logout from './components/Logout'
import Header from './components/header/Header'
import Calender from './Calender'
import Documents from './components/document/Documents'
import Congee from './components/congee/Congee'
import Autorisation from './components/autorisation/Autorisation'
import DocumentCreate from './components/document/Create'
import CongeeCreate from './components/congee/Create'
import AutorisationCreate from './components/autorisation/Create'
import DocumentConsult from './components/document/Consult'
import CongeConsult from './components/congee/Consult'
import AutorisationConsult from './components/autorisation/Consult'
import NotFound from './components/NotFound'

const App = () => {
	return (
		<>
			<GlobalStyle />

			<Backround />
			<Header />
			<Calender />
			<Routes>
				<Route
					exact
					path="/"
					element={<Navigate to="/documents/creer" replace={true} />}
				></Route>

				<Route path="/login" element={<Login />}></Route>
				<Route path="/logout" element={<Logout />}></Route>

				<Route path="/documents" element={<Documents />}>
					<Route index element={<DocumentCreate />}></Route>
					<Route path="creer" element={<DocumentCreate />}></Route>
					<Route path="consulter" element={<DocumentConsult />}></Route>
				</Route>

				<Route path="/autorisations" element={<Autorisation />}>
					<Route index element={<AutorisationCreate />}></Route>
					<Route path="creer" element={<AutorisationCreate />}></Route>
					<Route path="consulter" element={<AutorisationConsult />}></Route>
				</Route>

				<Route path="/conges" element={<Congee />}>
					<Route index element={<CongeeCreate />}></Route>
					<Route path="creer" element={<CongeeCreate />}></Route>
					<Route path="consulter" element={<CongeConsult />}></Route>
				</Route>

				<Route path="*" element={<NotFound />} />
			</Routes>
		</>
	)
}

export default App
