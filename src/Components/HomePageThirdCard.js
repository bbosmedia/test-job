import axios from 'axios'
import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { selectToken } from '../Redux/siteSlice'
import { Button } from '../Styles/Button.styled'
import { HomePageCard, HomePageCenterBox, InputDiv } from '../Styles/HomePage.styled'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const HomePageThirdCard = ({ phonea }) => {
	const [phone, setPhone] = useState('')
	const accesstoken = useSelector(selectToken)

	const changePhone = async (e) => {
		e.preventDefault()
		const phoneFormData = new FormData()
		phoneFormData.append('phone', phone)

		const response = await axios({
			method: 'post',
			url: 'http://92.63.206.40:1122/api/change_phone',
			data: phoneFormData,
			headers: { 'x-access-token': accesstoken },
		})

		if (response.status === 200) {
			setPhone('')
			toast.success('Phone Changed Successfully', { position: 'bottom-right', autoClose: 5000, hideProgressBar: false, closeOnClick: true, pauseOnHover: true, draggable: true, progress: undefined })
		}
	}
	return (
		<HomePageCard>
			<h3>Change Phone number</h3>
			<p> Phone no. currently registered ({phonea}) Available services: EXAMS; HELP DASK; ELECTIONS;</p>
			<HomePageCenterBox onSubmit={changePhone}>
				<div>
					<p>New phone number:</p>
					<InputDiv>
						<input value={phone} onChange={(e) => setPhone(e.target.value)} type="phone" placeholder="Eg. your phone number here" />
					</InputDiv>
					<div style={{ display: 'flex', alignItems: 'center' }}>
						<p>
							Disable forwarding: <input type="checkbox" />
						</p>
					</div>
				</div>

				<Button onSubmit={changePhone}>Change</Button>
			</HomePageCenterBox>
			<p style={{ fontSize: '15px', textAlign: 'center' }}>Last password change: 29/07/2021 22:09 - IP 151.33.106.247</p>
		</HomePageCard>
	)
}

export default HomePageThirdCard
