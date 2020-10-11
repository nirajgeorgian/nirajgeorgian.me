import React, { useContext } from 'react'
import { Wrapper, GlobalStyle } from 'components/layout/style'
import { Header } from 'components/header'
import { Footer } from 'components/footer'
import { ThemeContext } from 'contexts/theme'
import { Container, ContentContainer } from 'components/container'

const Layout: React.FC = ({ children }) => {
  const { theme } = useContext(ThemeContext)

  return (
    <React.Fragment>
      <GlobalStyle theme={theme} />
      <Wrapper>
        <Header />
        <Container theme={theme}>
          <ContentContainer>{children}</ContentContainer>
        </Container>
        <Footer />
      </Wrapper>
    </React.Fragment>
  )
}

export default Layout
