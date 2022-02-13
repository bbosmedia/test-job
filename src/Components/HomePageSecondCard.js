import React from 'react'
import { HomePageCard, HomePageCenterBox, InputDiv } from '../Styles/HomePage.styled'
import eyeOpen from '../Assets/eye-open.svg'
import { Button } from '../Styles/Button.styled'

const HomePageSecondCard = () => {
  return (
    <HomePageCard>
						<h3>Change password</h3>
						<p> We suggest you change your password regularly</p>
						<HomePageCenterBox>
							<div>
								<p>Currently pasword:</p>
								<InputDiv>
									<input type="password" placeholder="Eg. your pasword here" />
									<img src={eyeOpen} alt="" />
								</InputDiv>
							</div>
							<div>
								<p>New pasword:</p>
								<InputDiv>
									<input type="password" placeholder="Eg. your pasword here" />
									<img src={eyeOpen} alt="" />
								</InputDiv>
							</div>
							<div>
								<p>Confirm pasword:</p>
								<InputDiv>
									<input type="password" placeholder="Eg. your pasword here" />
									<img src={eyeOpen} alt="" />
								</InputDiv>
							</div>
                            <Button>Change</Button>
						</HomePageCenterBox>
                        <p style={{fontSize: '15px', textAlign: 'center',}}>Last password change: 29/07/2021 22:09 - IP 151.33.106.247</p>
					</HomePageCard>
  )
}

export default HomePageSecondCard