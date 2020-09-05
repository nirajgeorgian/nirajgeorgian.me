import React, { useContext } from 'react'
import dev from 'content/assets/illustrations/dev.svg'
import {
  Wrapper,
  IntroWrapper,
  Details,
  Thumbnail
} from 'components/intro/styles'
import { ThemeContext } from 'contexts/theme'
import { Link } from 'gatsby'
import { Button } from 'components/button'

export const Intro: React.FC = () => {
  const { theme } = useContext(ThemeContext)

  return (
    <Wrapper>
      <IntroWrapper>
        <Details theme={theme}>
          <h1>Hi There!</h1>
          <h4>I’m Niraj and I’m a software engineer!</h4>
          <Button as={Link} to="/contact">
            Hire me
          </Button>
        </Details>
        <Thumbnail>
          <img src={dev} alt="I’m Niraj and I’m a software engineer!" />
        </Thumbnail>
      </IntroWrapper>
    </Wrapper>
  )
}
