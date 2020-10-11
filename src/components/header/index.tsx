import React, { useContext } from 'react'
import { ThemeContext } from 'contexts/theme'
import { Brand, SiteTitle } from 'components/base'
import sunIcon from 'assets/icons/sun.svg'
import moonIcon from 'assets/icons/moon.svg'
import {
  NavbarWrapper,
  NavbarLinksWrapper,
  ToggleThemeWrapper
} from 'components/header/styles'
import { Link } from 'gatsby'
import { Container, ContentContainer } from 'components/container'

export const Header: React.FC = () => {
  const { theme, toggleTheme } = useContext(ThemeContext)

  return (
    <Container theme={theme}>
      <ContentContainer>
        <NavbarWrapper>
          <SiteTitle>
            <Brand as={Link} to="/" theme={theme}>
              nirajgeorgian
            </Brand>
          </SiteTitle>
          <NavbarLinksWrapper desktop theme={theme}>
            <Link to="/about">About</Link>
            <Link to="/projects">Projects</Link>
            <Link to="/contact">Contact</Link>
            <ToggleThemeWrapper type="button" onClick={toggleTheme}>
              <img src={theme === 'light' ? moonIcon : sunIcon} alt={theme} />
            </ToggleThemeWrapper>
          </NavbarLinksWrapper>
        </NavbarWrapper>
      </ContentContainer>
    </Container>
  )
}
