import React, { useContext } from 'react'
import { Wrapper, Flex, Links, Details } from 'components/footer/styles'
import social from 'components/footer/social.json'
import { Container, ContentContainer } from 'components/container'
import { ThemeContext } from 'contexts/theme'

export const Footer: React.FC = () => {
  const { theme } = useContext(ThemeContext)

  return (
    <Wrapper as={Container} theme={theme}>
      <Flex as={ContentContainer}>
        <Details>
          <h2>Niraj Georgian</h2>
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
