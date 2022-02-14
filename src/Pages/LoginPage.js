import axios from 'axios'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Button } from '../Styles/Button.styled'
import { NavLogo } from '../Styles/Header.styled'
import { HomePageCenterBox, InputDiv } from '../Styles/HomePage.styled'
import { LoginLayout, WhiteBordereContainer } from '../Styles/Login.styled'
import eyeOpen from '../Assets/eye-open.svg'
import eyeClose from '../Assets/eye-close.svg'
import { useDispatch } from 'react-redux'
import { enterAccesToken } from '../Redux/siteSlice'

const LoginPage = () => {
	const navigate = useNavigate()
	const [input, setInput] = useState({ login: '', password: '' })
	const [passwordtype, setPasswordtype] = useState('password')
	const dispatch = useDispatch();

	const update = (e) => {
		const { name, value } = e.target
		setInput((prevValue) => {
			return { ...prevValue, [name]: value }
		})
	}

	const changePasswordType = () =>{
		if(passwordtype === 'password'){
			setPasswordtype('text')
		}else{
			setPasswordtype('password')
		}
	}

	const login = async (e) => {
		e.preventDefault()
		const loginFormData = new FormData()
		loginFormData.append('login', input.login)
		loginFormData.append('password', input.password)

		try {
			const response = await axios({
				method: 'post',
				url: 'http://92.63.206.40:1122/api/login',
				data: loginFormData,
				headers: { 'Content-Type': 'multipart/form-data' },
			})

			if (response.status === 200 && response.data.token) {
				dispatch(enterAccesToken(response.data.token))
				setTimeout(() => navigate('/'), 1000);
				navigate('/')
			}
		} catch (e) {
			console.log(e)
		}
	}
	return (
		<LoginLayout>
			<div>
				<NavLogo color="#fff" to="/">
					Logo
				</NavLogo>
				<h1>Sign In</h1>
			</div>
			<WhiteBordereContainer>
				<HomePageCenterBox onSubmit={login}>
					<h2>LOGO</h2>
					<div style={{ paddingTop: '0px' }}>
						<p>Login:</p>
						<InputDiv>
							<input value={input.login} name="login" onChange={update} type="text" required placeholder="Eg. your e-mail here" />
						</InputDiv>
					</div>
					<div style={{ paddingTop: '0px' }}>
						<p>Password:</p>
						<InputDiv>
							<input value={input.password} name="password" onChange={update} type={passwordtype} required placeholder="Eg. your pasword here" />
							<img onClick={changePasswordType} src={passwordtype === 'password' ? eyeOpen : eyeClose} alt="" />
						</InputDiv>
					</div>
					<Link to="/signup">Sign Up</Link>
					<Button type='submit'>Change</Button>
				</HomePageCenterBox>
			</WhiteBordereContainer>
		</LoginLayout>
	)
}

export default LoginPage
