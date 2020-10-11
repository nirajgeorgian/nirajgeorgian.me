import React, { useContext } from 'react'
import { Link } from 'gatsby'
import { Flex, Links, Details, Wrapper } from 'components/footer/styles'
import social from 'components/footer/social.json'
import { ContentContainer } from 'components/container'
import { ThemeContext } from 'contexts/theme'
import { Brand, SiteTitle } from 'components/base'

export const Footer: React.FC = () => {
  const { theme } = useContext(ThemeContext)

  return (
    <Wrapper theme={theme}>
      <Flex as={ContentContainer}>
        <Details>
          <SiteTitle theme={theme}>
            <Brand as={Link} to="/" theme={theme}>
              Niraj Georgian
            </Brand>
          </SiteTitle>
          <span>© All rights are reserved | {new Date().getFullYear()}</span>
        </Details>
        <Links>
          {social.map(({ id, name, link, icon }) => (
            <a
              key={id}
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`follow me on ${name}`}
            >
              <img width="24" src={icon} alt={name} />
            </a>
          ))}
        </Links>
      </Flex>
    </Wrapper>
  )
}
