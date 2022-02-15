import axios from 'axios'
import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { toast } from 'react-toastify'
import { selectToken } from '../Redux/siteSlice'
import { Button } from '../Styles/Button.styled'
import { HomePageCard, HomePageCenterBox, InputDiv } from '../Styles/HomePage.styled'

const HomePageFourthCard = ({emaila}) => {
	const [email, setEmail] = useState('')
	const accesstoken = useSelector(selectToken);
	const changePhone = async (e) => {
		e.preventDefault()
		const emailFormData = new FormData()
		emailFormData.append('email', email)

		const response = await axios({
			method: 'post',
			url: 'http://92.63.206.40:1122/api/change_email',
			data: emailFormData,
			headers: { 'x-access-token': accesstoken },
		})

		if (response.status === 200) {
			setEmail('')
			toast.success('Email Changed Successfully', { position: 'bottom-right', autoClose: 5000, hideProgressBar: false, closeOnClick: true, pauseOnHover: true, draggable: true, progress: undefined })
		}
	}
	return (
		<HomePageCard>
			<h3>Forward</h3>
			<p>TDAU is not responsible for any lost message due to the activation of the forwarding service. Valid messages are those stored in the server with domain: {emaila} Make sure you regularly delete the messages stored on this server.</p>
			<HomePageCenterBox onSubmit={changePhone}>
				<div>
					<p>Forwarding e-mail address:</p>
					<InputDiv>
						<input value={email} onChange={(e)=>setEmail(e.target.value)} type="email" required placeholder="Eg. your e-mail here" />
					</InputDiv>
					<div style={{ display: 'flex', alignItems: 'center' }}>
						<p>
							Disable forwarding: <input type="checkbox" />
						</p>
					</div>
				</div>

				<Button type='submit'>Change</Button>
			</HomePageCenterBox>
			<p style={{ fontSize: '15px', textAlign: 'center' }}>Last password change: 29/07/2021 22:09 - IP 151.33.106.247</p>
		</HomePageCard>
	)
}

export default HomePageFourthCard
