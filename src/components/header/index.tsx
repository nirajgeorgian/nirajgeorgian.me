import React, { useContext } from 'react'
import { ThemeContext } from 'contexts/theme'
import sunIcon from 'content/assets/icons/sun.svg'
import moonIcon from 'content/assets/icons/moon.svg'
import {
  NavbarWrapper,
  Brand,
  NavbarLinksWrapper,
  ToggleThemeWrapper
} from 'components/header/styles'
import { Link } from 'gatsby'
import { Container, ContentContainer } from 'components/container'
import { SiteTitle } from 'components/base'

export const Header: React.FC = () => {
  // const [sidebar, toggle] = useState(false)
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
