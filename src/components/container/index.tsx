import styled from 'styled-components'
import { ITheme, colors } from 'components/base'

export const Container = styled.div<ITheme>`
  background: ${({ theme }) =>
    theme === 'light' ? colors.light : colors.dark};
`

export const ContentContainer = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  width: 90%;
  @media (min-width: 601px) {
    width: 90%;
  }
  @media (min-width: 993px) {
    width: 80%;
  }
`
