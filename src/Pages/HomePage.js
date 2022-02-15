import React, { useEffect, useState } from 'react'
import { Container } from '../Styles/Container.styled'
import {InnerHomePage, } from '../Styles/HomePage.styled'

import HomePageSecondCard from '../Components/HomePageSecondCard'
import HomePageFirstCard from '../Components/HomePageFirstCard'
import HomePageThirdCard from '../Components/HomePageThirdCard'
import HomePageFourthCard from '../Components/HomePageFourthCard'
import axios from 'axios'
import { mainUrl } from '../consts'
import { useSelector } from 'react-redux'
import { selectToken } from '../Redux/siteSlice'
import useReactRouterBreadcrumbs from 'use-react-router-breadcrumbs'

const HomePage = () => {
	const [data, setData] = useState(null)
	const breadcrumbs = useReactRouterBreadcrumbs()
	const accesstoken = useSelector(selectToken)

	const getData = async() =>{
		const response = await axios.get(mainUrl + 'user', {headers: {'x-access-token': accesstoken, }})
		if(response.status === 200){
			setData(response.data);
		}else{
			console.log(response.data)
		}
	}

	useEffect(()=>{
		setTimeout(()=>{
			getData();
		},1000)
	},[breadcrumbs])
	return (
		<>
			<Container style={{ marginBottom: '50px' }}>
				<InnerHomePage>
					{data && <HomePageFirstCard data={data} />}
					<HomePageSecondCard />
					{data && <HomePageThirdCard phonea={data.phone} />}
					{data && <HomePageFourthCard emaila={data.email} />}
				</InnerHomePage>
			</Container>
		</>
	)
}

export default HomePage
