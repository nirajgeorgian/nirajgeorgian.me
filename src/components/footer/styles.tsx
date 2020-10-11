import styled from 'styled-components'
import { Container } from 'components/container'

export const Wrapper = styled(Container)`
  padding: 3rem 0;
`

export const Flex = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  @media (max-width: 680px) {
    flex-direction: column;
    text-align: center;
    align-items: center;
  }
`

export const Details = styled.div`
  @media (max-width: 680px) {
    margin-bottom: 2rem;
  }
`

export const Links = styled.div`
  display: flex;
  align-items: center;
  a {
    margin: 0 0.5rem;
    img {
      margin: 0;
    }
    &:first-child,
    &:last-child {
      margin: 0;
    }
  }
`
