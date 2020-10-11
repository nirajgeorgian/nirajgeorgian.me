import styled from 'styled-components'

export interface ITheme {
  dark?: boolean
}

// https://colorhunt.co/palette/2763
export const colors = {
  dark: '#222831',
  subDark: '#393e46',
  light: '#eeeeee',
  primary: '#00adb5'
}

export const Body = styled.div`
  display: flex;
  flex-direction: column;
`

export const SiteTitle = styled.h1<ITheme>`
  margin: 0;
  color: ${({ theme }) => (theme === 'light' ? colors.dark : colors.light)};
  @media (max-width: 576px) {
    font-size: 1.5rem;
  }
`

export const Heading = styled.h1<ITheme>`
  margin-bottom: 2rem;
  color: ${({ theme }) => (theme === 'light' ? colors.dark : colors.light)};
  font-size: 36pt;
  @media (max-width: 960px) {
    mix-blend-mode: ${({ theme }) =>
      theme === 'light' ? 'unset' : 'difference'};
  }
  @media (max-width: 680px) {
    font-size: 30pt;
  }
`

export const SubHeading = styled.h3<ITheme>`
  margin-bottom: 2.5rem;
  font-size: 32pt;
  font-weight: normal;
  color: ${({ theme }) =>
    theme === 'light' ? colors.subDark : colors.primary};
  @media (max-width: 960px) {
    mix-blend-mode: ${({ theme }) =>
      theme === 'light' ? 'unset' : 'difference'};
  }
  @media (max-width: 680px) {
    font-size: 26pt;
  }
`

export const Article = styled.article`
  margin: 1rem 0;
`

export const Brand = styled.a<ITheme>`
  color: ${({ theme }) => (theme === 'light' ? colors.dark : colors.light)};
  :hover {
    color: ${({ theme }) => (theme === 'light' ? colors.dark : colors.light)};
  }
  @media (max-width: 960px) {
    mix-blend-mode: ${({ theme }) =>
      theme === 'light' ? 'unset' : 'difference'};
  }
  text-decoration: none;
`
