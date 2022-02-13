import styled from 'styled-components'

export const InnerHomePage = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr;
	margin-top: 93px;
	grid-gap: 30px;
    @media(max-width: 900px) {
        grid-template-columns: 1fr;
  }
`

export const HomePageCard = styled.div`
	padding: 40px 30px;
	background: #ffffff;
	box-shadow: 3.75215px 3.75215px 18.7607px rgba(0, 0, 0, 0.25);
	border-radius: 0px 0px 12.5072px 12.5072px;
	text-align: center;
	display: flex;
	align-items: center;
	flex-direction: column;
	min-height: 500px;
	& h3 {
		font-size: 25.5676px;
		line-height: 30px;
		display: flex;
		align-items: center;
		text-align: center;
		letter-spacing: 0.019em;
		color: #262628;
		text-align: center;
		margin-bottom: 10px;
	}

	& p {
		text-align: center;
		font-weight: 300;
		font-size: 16px;
	}
`

export const InfoCard = styled.div`
	display: flex;
	width: 100%;

	& h3 {
		font-size: 23px;
	}

	& p {
		text-align: start;
		font-weight: 300;
		line-height: 30px;
	}

	& div div {
		display: flex;
		justify-content: space-between;
		align-items: center;

		img {
			margin-bottom: 10px;
		}
	}
`

export const AvatarCard = styled.div`
	width: 150px;
	height: 150px;
	position: relative;
	margin-right: 20px;
	& img:nth-child(1) {
		width: 150px;
		height: 150px;
		border-radius: 20px;
		object-fit: cover;
	}
`

export const IconCircle = styled.img`
	position: absolute;
	bottom: 0px;
	right: 0px;
	height: 37px;
	width: 37px;
`

export const ContentBox = styled.div`
	margin-top: 40px;
	width: 100%;

	& p {
		text-align: start;
		margin-bottom: 10px;
	}

	& b {
		text-align: start;
	}
`

export const HomePageCenterBox = styled.div`
	margin: auto 0;
	padding: 20px 0;
	width: 100%;
	max-width: 390px;
	& p {
		text-align: start;
		margin-bottom: 10px;
	}

    & div{
        margin-bottom: 20px;
    }
`

export const InputDiv = styled.div`
	width: 100%;
	height: 45px;
	display: flex;
	align-items: center;
	background: #fcfcfd;
	border: 1.06532px solid #cfd0d7;
	box-sizing: border-box;
	border-radius: 2.13063px;

	& input {
		flex: 1;
		width: 100%;
		border: none;
		outline: none;
		padding: 0 20px;
		font-size: 14px;

		&::placeholder {
			font-size: 14px;
			font-family: 'Inter', sans-serif;
			color: rgba(26, 32, 61, 0.3);
			line-height: 21px;
		}
	}
	& img {
		margin-right: 10px;
	}
`
