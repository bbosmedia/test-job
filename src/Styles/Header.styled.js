import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const StyledHeader = styled.header`
	padding-top: 20px;
`

export const HeaderInner = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
`

export const NavMenu = styled.div`
	display: flex;
	align-items: center;
    justify-content: flex-end;
`

export const NavLogo = styled(Link)`
	font-weight: 800;
	font-size: 48px;
	line-height: 59px;
	color: #193325;
	text-transform: uppercase;
`

export const NavLink = styled(Link)`
	font-weight: bold;
	font-size: 20px;
	line-height: 24px;
	text-transform: uppercase;
	color: #193325;
    margin-left: 45px;
`
