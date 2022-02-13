import React from 'react'
import avatar from '../Assets/avatar.png'
import photoIcons from '../Assets/photo-icon.svg'
import editIcon from '../Assets/pencil-icon.svg'
import { AvatarCard, ContentBox, HomePageCard, IconCircle, InfoCard } from '../Styles/HomePage.styled'

const HomePageFirstCard = () => {
	return (
		<HomePageCard>
			<InfoCard>
				<AvatarCard>
					<img src={avatar} alt="" />
					<IconCircle src={photoIcons} />
				</AvatarCard>
				<div>
					<div>
						<h3>Name Surname</h3>
						<img src={editIcon} alt="" />
					</div>
					<p>
						272610<br></br>
						Bachelor of science program in
						<b> ENGINEERING AND MANAGEMENT</b>
					</p>
				</div>
			</InfoCard>
			<ContentBox>
				<p>Latest Enrolment</p>
				<p>
					<b>2021/2022 - Full Time</b>
				</p>
				<p>3^ enrollment, cohort 2019/20</p>
				<p>
					Academic progress status: <b style={{ color: 'green' }}>ACTIVE</b>
				</p>
			</ContentBox>
		</HomePageCard>
	)
}

export default HomePageFirstCard
