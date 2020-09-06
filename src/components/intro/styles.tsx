import styled from 'styled-components'

export const Wrapper = styled.div`
  padding-bottom: 4rem;
  background-size: contain;
  background-position: right top;
  background-repeat: no-repeat;
`

export const IntroWrapper = styled.div`
  padding: 4rem 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media (max-width: 960px) {
    flex-direction: column;
  }
`

export const Details = styled.div<{ theme: string }>`
  flex: 1;
  @media (max-width: 960px) {
    width: 100%;
    margin-bottom: 2rem;
  }
`

export const Thumbnail = styled.div`
  flex: 1;
  @media (max-width: 960px) {
    width: 100%;
  }
  img {
    width: 100%;
  }
`
