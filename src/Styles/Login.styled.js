import styled from 'styled-components'

export const LoginLayout = styled.div`
	background: #2c473e;
	position: relative;
	min-height: 100vh;
	padding: 30px;
	display: grid;
	grid-template-columns: 1fr 1fr;

	@media (max-width: 862px) {
		grid-template-columns: 1fr;
		grid-gap: 40px;
	}

	& div {
		max-width: 900px;
		text-align: center;
		width: 100%;
	}

	& div:nth-child(1) {
		padding-top: 215px;
	}

	& h1 {
		font-weight: 800;
		font-size: 48px;
		line-height: 59px;
		text-align: center;
		text-transform: uppercase;
		color: #ffffff;
		margin-top: 45px;
	}

	& form h2 {
		font-weight: bold;
		font-size: 25.5676px;
		line-height: 1.17;
		align-items: center;
		color: #262628;
		margin-bottom: 36.58px;
	}

	& form a {
		font-weight: 500;
		font-size: 14.9144px;
		line-height: 1.4;
		text-align: center;
		color: #5f6377;
	}
`

export const WhiteBordereContainer = styled.div`
	max-height: 1014px;
	background: #ffffff;
	box-shadow: 3.75215px 3.75215px 18.7607px rgba(0, 0, 0, 0.25);
	border-radius: 25px;
	display: flex;
	align-items: center;
	justify-content: center;
	width: 100%;
`
