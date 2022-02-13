import React from 'react'
import { Button } from '../Styles/Button.styled'
import { HomePageCard, HomePageCenterBox, InputDiv } from '../Styles/HomePage.styled'

const HomePageFourthCard = () => {
	return (
		<HomePageCard>
			<h3>Forward</h3>
			<p>TDAU is not responsible for any lost message due to the activation of the forwarding service. Valid messages are those stored in the server with domain: student@tdau.uz Make sure you regularly delete the messages stored on this server.</p>
			<HomePageCenterBox>
				<div>
					<p>Forwarding e-mail address:</p>
					<InputDiv>
						<input type="email" required placeholder="Eg. your e-mail here" />
					</InputDiv>
					<div style={{ display: 'flex', alignItems: 'center' }}>
						<p>
							Disable forwarding: <input type="checkbox" />
						</p>
					</div>
				</div>

				<Button>Change</Button>
			</HomePageCenterBox>
			<p style={{ fontSize: '15px', textAlign: 'center' }}>Last password change: 29/07/2021 22:09 - IP 151.33.106.247</p>
		</HomePageCard>
	)
}

export default HomePageFourthCard
