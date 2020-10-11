import styled from 'styled-components'
import { Wrapper } from 'components/layout/style'

export const Container = styled.div`
  max-width: 992px;
  width: 100%;
  margin-left: auto;
  margin-right: auto;
`

export const ContentContainer = styled(Wrapper)`
  @media (min-width: 601px) {
    width: 90%;
  }
`
