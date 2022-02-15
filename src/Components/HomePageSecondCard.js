import React, { useState } from 'react'
import { HomePageCard, HomePageCenterBox, InputDiv } from '../Styles/HomePage.styled'
import eyeOpen from '../Assets/eye-open.svg'
import eyeClose from '../Assets/eye-close.svg'
import { Button } from '../Styles/Button.styled'
import axios from 'axios'
import { useSelector } from 'react-redux'
import { selectToken } from '../Redux/siteSlice'
import { toast } from 'react-toastify'

const HomePageSecondCard = () => {
	const accesstoken = useSelector(selectToken)
	const [passwords, setPasswords] = useState({
		old_password: '',
		new_password: '',
		repeat_password: '',
	})

	const [passwordTypes, setPasswordTypes] = useState({
		first: true,
		second: true,
		third: true,
	})

	const update = (e) => {
		const { name, value } = e.target
		setPasswords((prevValue) => {
			return { ...prevValue, [name]: value }
		})
	}

	const changePassword = async (e) => {
		e.preventDefault()
		const passwordsFormData = new FormData()
		passwordsFormData.append('old_password', passwords.old_password)
		passwordsFormData.append('new_password', passwords.new_password)
		passwordsFormData.append('repeat_password', passwords.repeat_password)

		if (passwords.new_password !== passwords.repeat_password) {
			toast.error("New and Repeat passwords are'nt same", { position: 'bottom-right', autoClose: 3000, hideProgressBar: false, closeOnClick: true, pauseOnHover: true, draggable: true, progress: undefined })
		}

		if (passwords.new_password === passwords.repeat_password) {
			const response = await axios({
				method: 'post',
				url: 'http://92.63.206.40:1122/api/change_password',
				data: passwordsFormData,
				headers: { 'x-access-token': accesstoken },
			})

			if (response.status === 200) {
				if (response.data.msg === 'success') {
					toast.success('Password Changed Successfully', { position: 'bottom-right', autoClose: 3000, hideProgressBar: false, closeOnClick: true, pauseOnHover: true, draggable: true, progress: undefined })

					setPasswords({old_password: '',
					new_password: '',
					repeat_password: '',})
				} else {
					toast.error(response.data.msg, { position: 'bottom-right', autoClose: 3000, hideProgressBar: false, closeOnClick: true, pauseOnHover: true, draggable: true, progress: undefined })
				}
			} else {
				console.log(response.data)
			}
		}
	}
	return (
		<HomePageCard>
			<h3>Change password</h3>
			<p> We suggest you change your password regularly</p>
			<HomePageCenterBox onSubmit={changePassword}>
				<div>
					<p>Currently pasword:</p>
					<InputDiv>
						<input onChange={update} name="old_password" type={passwordTypes.first ? 'password' : 'text'} placeholder="Eg. your pasword here" />
						<img onClick={() => setPasswordTypes({ ...passwordTypes, first: !passwordTypes.first })} src={passwordTypes.first ? eyeOpen : eyeClose} alt="" />
					</InputDiv>
				</div>
				<div>
					<p>New pasword:</p>
					<InputDiv>
						<input onChange={update} name="new_password" type={passwordTypes.second ? 'password' : 'text'} placeholder="Eg. your pasword here" />
						<img onClick={() => setPasswordTypes({ ...passwordTypes, second: !passwordTypes.second })} src={passwordTypes.second ? eyeOpen : eyeClose} alt="" />
					</InputDiv>
				</div>
				<div>
					<p>Confirm pasword:</p>
					<InputDiv>
						<input onChange={update} name="repeat_password" type={passwordTypes.third ? 'password' : 'text'} placeholder="Eg. your pasword here" />
						<img onClick={() => setPasswordTypes({ ...passwordTypes, third: !passwordTypes.third })} src={passwordTypes.third ? eyeOpen : eyeClose} alt="" />
					</InputDiv>
				</div>
				<Button onSubmit={changePassword}>Change</Button>
			</HomePageCenterBox>
			<p style={{ fontSize: '15px', textAlign: 'center' }}>Last password change: 29/07/2021 22:09 - IP 151.33.106.247</p>
		</HomePageCard>
	)
}

export default HomePageSecondCard
