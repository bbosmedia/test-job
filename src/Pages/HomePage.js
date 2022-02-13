import React from 'react'
import { Container } from '../Styles/Container.styled'
import {HomePageCard, InnerHomePage, InputDiv } from '../Styles/HomePage.styled'

import HomePageSecondCard from '../Components/HomePageSecondCard'
import HomePageFirstCard from '../Components/HomePageFirstCard'
import HomePageThirdCard from '../Components/HomePageThirdCard'

const HomePage = () => {
	return (
		<>
			<Container style={{marginBottom: '50px'}}>
				<InnerHomePage>
                    <HomePageFirstCard></HomePageFirstCard>
					<HomePageSecondCard />
					<HomePageThirdCard />
					<HomePageCard>
						<h3>Forward</h3>
						<p>TDAU is not responsible for any lost message due to the activation of the forwarding service. Valid messages are those stored in the server with domain: student@tdau.uz Make sure you regularly delete the messages stored on this server.</p>
					</HomePageCard>
				</InnerHomePage>
			</Container>
		</>
	)
}

export default HomePage
