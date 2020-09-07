import React, { useContext } from 'react'
import dev from 'assets/illustrations/dev.svg'
import {
  Wrapper,
  IntroWrapper,
  Details,
  Thumbnail
} from 'components/intro/styles'
import { ThemeContext } from 'contexts/theme'
import { Link } from 'gatsby'
import { Button } from 'components/button'
import { Heading, SubHeading } from 'components/base'

export const Intro: React.FC = () => {
  const { theme } = useContext(ThemeContext)

  return (
    <Wrapper>
      <IntroWrapper>
        <Details theme={theme}>
          <Heading theme={theme}>Hi There!</Heading>
          <SubHeading theme={theme}>
            I’m Niraj and I’m a software engineer!
          </SubHeading>
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
