import styled from 'styled-components'
import { colors } from 'components/base'

export const NavbarWrapper = styled.div`
  padding: 1.5rem 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media (max-width: 576px) {
    justify-content: center;
  }
`

export const LinksWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`

export const NavbarLinksWrapper = styled.div<{
  theme: string
  desktop: boolean
}>`
  a {
    color: ${({ theme }) => (theme === 'light' ? colors.dark : colors.light)};
    text-decoration: none;
    @media (max-width: 960px) {
      color: ${({ theme }) => (theme === 'light' ? '#000' : '#fff')};
    }
  }
  ${({ desktop }) =>
    desktop
      ? `
      align-items: center;
      display: flex;
      @media (max-width: 960px) {
          display: none;
      }
      a {
          margin-right: 1rem;
          &:last-child {
              margin-right: unset;
          }
      }
    `
      : `
      padding: 3rem;
      display: flex;
      flex-direction: column;
      a {
          margin-bottom: 1rem;
          &:last-child {
              margin-bottom: unset;
          }
      }
  `}
`

export const ToggleThemeWrapper = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  transition: 0.3s all;
  &:focus {
    outline: none;
    transition: 0.3s all;
  }
  @media (max-width: 960px) {
    text-align: left;
  }
  img {
    margin-bottom: unset;
  }
`

export const Wrapper = styled.div`
  background: transparent;
  width: 100%;
`

export const Overlay = styled.div`
  position: fixed;
  background: rgba(0, 0, 0, 0.7);
  width: 100%;
  height: 100%;
  display: none;
  transition: 0.4s;
  ${({ sidebar }) =>
    sidebar &&
    `
    display: block;
    z-index: 4;	
  `}
`
