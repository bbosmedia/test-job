import React, { useState } from 'react'
import { Button } from '../Styles/Button.styled'
import { NavLogo } from '../Styles/Header.styled'
import { HomePageCenterBox, InputDiv } from '../Styles/HomePage.styled'
import { LoginLayout, WhiteBordereContainer } from '../Styles/Login.styled'
import eyeOpen from '../Assets/eye-open.svg'
import eyeClose from '../Assets/eye-close.svg'
import { useSelector } from 'react-redux'
import { selectFaculties, selectFacultyKeys } from '../Redux/siteSlice'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const SignUpPage = () => {
	const navigate = useNavigate();
	const [passwordtype, setPasswordtype] = useState('password')
	const [input, setInput] = useState({
		login: '',
		password: '',
		surname: '',
		name: '',
		faculty_id: 1,
		phone: '',
		email: '',
	})

	const faculties = useSelector(selectFaculties)
	const facultykeys = useSelector(selectFacultyKeys)

	function getKeyByValue(object, value) {
		return Object.keys(object).find((key) => object[key] === value)
	}

	const changePasswordType = () =>{
		if(passwordtype === 'password'){
			setPasswordtype('text')
		}else{
			setPasswordtype('password')
		}
	}

	const update = (e) => {
		const { name, value } = e.target



		if (name === 'faculty') {
			const id = getKeyByValue(faculties, value)
			setInput((prevValue) => {
				return { ...prevValue, faculty_id: parseInt(id) }
			})
		} else {
			setInput((prevValue) => {
				return { ...prevValue, [name]: value }
			})
		}
	}

	const signup =  async(e) => {
		e.preventDefault()
		const loginFormData = new FormData()
		loginFormData.append("login", input.login);
		loginFormData.append("password", input.password);
		loginFormData.append("surname", input.surname);
		loginFormData.append("name", input.name);
		loginFormData.append("faculty_id", input.faculty_id);
		loginFormData.append("phone", input.phone);
		loginFormData.append("email", input.email);
		console.log("clicked")
		try{
			const response = await axios({
				method: "post",
				url: "http://92.63.206.40:1122/api/signin",
				data: loginFormData,
				headers: { "Content-Type": "multipart/form-data"},
			})
		
			if(response.status === 200){
				navigate('/login')
			}
		}catch(e){
			console.log(e)
		}
	}

	if (facultykeys === null) return null
	return (
		<LoginLayout>
			<div>
				<NavLogo color="#fff" to="/">
					Logo
				</NavLogo>
				<h1>
					Registration <br></br>
					form
				</h1>
			</div>
			<WhiteBordereContainer>
				<HomePageCenterBox onSubmit={signup}>
					<h2>LOGO</h2>
					<InputForm label="Login" value={input.login} name="login" onChange={update} type="text" placeholder="Eg. your login here" />
					<InputForm label="Name" value={input.name} name="name" onChange={update} type="text" placeholder="Eg. your name here" />
					<InputForm label="Surname" value={input.surname} name="surname" onChange={update} type="text" placeholder="Eg. your surname here" />
					<InputForm label="e-mail" value={input.email} name="email" onChange={update} type="email" placeholder="Eg. your email here" />
					<InputForm label="Phone number" value={input.phone} name="phone" onChange={update} type="text" placeholder="Eg. your phone here" />
					<div style={{ paddingTop: '0px' }}>
						<p>Faculty:</p>
						<InputDiv>
							<select value={faculties[input.faculty_id]} onChange={update} id="cars" name="faculty">
								{facultykeys.map((key) => {
									return (
										<option key={key} value={faculties[parseInt(key)]}>
											{faculties[parseInt(key)]}
										</option>
									)
								})}
							</select>
						</InputDiv>
					</div>
					<div style={{ paddingTop: '0px' }}>
						<p>Password:</p>
						<InputDiv>
							<input value={input.password} name="password" onChange={update} type={passwordtype} placeholder="Eg. your pasword here" />
							<img onClick={changePasswordType} src={passwordtype === 'password' ? eyeOpen : eyeClose} alt="" />
						</InputDiv>
					</div>
					<Button type='submit'>Register</Button>
				</HomePageCenterBox>
			</WhiteBordereContainer>
		</LoginLayout>
	)
}

function InputForm({ label, value, name, onChange, type, placeholder }) {
	return (
		<div style={{ paddingTop: '0px' }}>
			<p>{label}:</p>
			<InputDiv>
				<input required value={value} name={name} onChange={onChange} type={type} placeholder={placeholder} />
			</InputDiv>
		</div>
	)
}

export default SignUpPage
