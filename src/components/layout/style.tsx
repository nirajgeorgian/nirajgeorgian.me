import { colors, ITheme } from 'components/base'
import styled, { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle<ITheme>`
  body {
    font-family: Open-Sans, Helvetica, Sans-Serif;
    color: ${({ theme }) => (theme === 'dark' ? 'white' : 'black')};
    background: ${({ theme }) =>
      theme === 'light' ? colors.light : colors.dark};
  }

  blockquote, ul, li {
    color: ${({ theme }) => (theme === 'dark' ? 'white' : 'black')}; 
  }
`

export const Wrapper = styled.div`
  max-width: 992px;
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  padding: 0 1rem;

  @media only screen and (max-width: 600px) {
    padding: 0 0.5rem;
  }
`
