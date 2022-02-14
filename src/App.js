import React, { useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import GlobalStyle from './globalStyles'
import Main from './Layouts/Main'
import HomePage from './Pages/HomePage'
import LoginPage from './Pages/LoginPage'
import SignUpPage from './Pages/SignUpPage'
import { useDispatch } from 'react-redux'
import axios from 'axios'
import { updateFaculties } from './Redux/siteSlice'
import { mainUrl } from './consts'
import { ToastContainer } from 'react-toastify'

function App() {
	const dispatch = useDispatch()

	const getFaculties = async () => {
		let response = await axios.get(`${mainUrl}faculty`)
		if (response.status === 200) {
			dispatch(updateFaculties(response.data))
		} else {
			console.log('Api Problem')
		}
	}
	useEffect(() => {
		getFaculties()
	}, [])
	return (
		<>
			<GlobalStyle />
			<Routes>
				<Route
					path="/"
					element={
						<Main>
							<HomePage />{' '}
						</Main>
					}></Route>
				<Route path="/login" element={<LoginPage />} />
				<Route path="/signup" element={<SignUpPage />} />
			</Routes>
			<ToastContainer  />
		</>
	)
}

export default App
