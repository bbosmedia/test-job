import React from 'react'
import { Container } from '../Styles/Container.styled'
import { HomePageCard, InnerHomePage, InputDiv } from '../Styles/HomePage.styled'

import HomePageSecondCard from '../Components/HomePageSecondCard'
import HomePageFirstCard from '../Components/HomePageFirstCard'
import HomePageThirdCard from '../Components/HomePageThirdCard'
import HomePageFourthCard from '../Components/HomePageFourthCard'

const HomePage = () => {
	return (
		<>
			<Container style={{ marginBottom: '50px' }}>
				<InnerHomePage>
					<HomePageFirstCard></HomePageFirstCard>
					<HomePageSecondCard />
					<HomePageThirdCard />
					<HomePageFourthCard />
				</InnerHomePage>
			</Container>
		</>
	)
}

export default HomePage
