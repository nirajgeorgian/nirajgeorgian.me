import React, { useContext } from 'react'
import { ThemeContext } from 'contexts/theme'
import sunIcon from 'content/assets/icons/sun.svg'
import moonIcon from 'content/assets/icons/moon.svg'
import {
  Wrapper,
  NavbarWrapper,
  Brand,
  NavbarLinksWrapper,
  ToggleThemeWrapper
} from 'components/header/styles'
import { Link } from 'gatsby'
import { Container } from 'components/container'

export const Header: React.FC = () => {
  // const [sidebar, toggle] = useState(false)
  const { theme, toggleTheme } = useContext(ThemeContext)

  return (
    <Wrapper>
      <NavbarWrapper as={Container}>
        <h2>
          <Brand as={Link} to="/" theme={theme}>
            nirajgeorgian
          </Brand>
        </h2>
        <NavbarLinksWrapper desktop theme={theme}>
          <Link to="/about">About</Link>
          <Link to="/projects">Projects</Link>
          <Link to="/contact">Contact</Link>
          <ToggleThemeWrapper type="button" onClick={toggleTheme}>
            <img src={theme === 'light' ? moonIcon : sunIcon} alt={theme} />
          </ToggleThemeWrapper>
        </NavbarLinksWrapper>
      </NavbarWrapper>
    </Wrapper>
  )
}
