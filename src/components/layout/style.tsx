import styled, { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  body {
    font-family: Open-Sans, Helvetica, Sans-Serif;
    color: ${({ theme }) => (theme === 'dark' ? 'white' : 'black')};
  }

  blockquote, ul, li {
    color: ${({ theme }) => (theme === 'dark' ? 'white' : 'black')}; 
  }
`

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`
