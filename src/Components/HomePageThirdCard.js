import React from 'react'
import { Button } from '../Styles/Button.styled'
import { HomePageCard, HomePageCenterBox, InputDiv } from '../Styles/HomePage.styled'

const HomePageThirdCard = () => {
	return (
		<HomePageCard>
			<h3>Change Phone number</h3>
			<p> Phone no. currently registered (+998 93 497 11-38) Available services: EXAMS; HELP DASK; ELECTIONS;</p>
			<HomePageCenterBox>
				<div>
					<p>New phone number:</p>
					<InputDiv>
						<input type="phone" placeholder="Eg. your pasword here" />
					</InputDiv>
                    <div style={{display: 'flex', alignItems: 'center'}}>
                        <p>Disable forwarding: <input type="checkbox"/></p>
                    </div>
				</div>
				
				<Button>Change</Button>
			</HomePageCenterBox>
			<p style={{ fontSize: '15px', textAlign: 'center' }}>Last password change: 29/07/2021 22:09 - IP 151.33.106.247</p>
		</HomePageCard>
	)
}

export default HomePageThirdCard
