import React from 'react'
import { Wrapper, Flex, Links, Details } from 'components/footer/styles'
import social from 'components/footer/social.json'
import { Container } from 'components/container'

export const Footer: React.FC = () => (
  <Wrapper>
    <Flex as={Container}>
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
