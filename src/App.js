import React from 'react'

import { Routes, Route } from 'react-router-dom'
import GlobalStyle from './globalStyles'
import Main from './Layouts/Main'
import HomePage from './Pages/HomePage'

function App() {
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
			</Routes>
		</>
	)
}

export default App
