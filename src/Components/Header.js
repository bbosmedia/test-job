import React from 'react'
import { Container } from '../Styles/Container.styled'
import { HeaderInner, NavLogo, NavMenu, StyledHeader, NavLink  } from '../Styles/Header.styled'

const Header = () => {
	return (
		<StyledHeader>
			<Container>
				<HeaderInner>
					<NavLogo to="/">LOGO</NavLogo>
					<NavMenu>
						<NavLink to="/">Модули</NavLink>
						<NavLink to="/">новости</NavLink>
						<NavLink to="/">ресурсы</NavLink>
						<NavLink to="/">Поддержка</NavLink>
						<NavLink to="/">профиль</NavLink>
						<NavLink to="/">язык</NavLink>
					</NavMenu>
				</HeaderInner>
			</Container>
		</StyledHeader>
	)
}

export default Header
