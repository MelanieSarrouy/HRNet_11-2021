import styled from 'styled-components'
import colors from '../bases/colors'
import { NavLink } from 'react-router-dom'

export const NavStyled = styled.nav`
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin-top: -0.5rem;
`
export const StyledLink = styled(NavLink)`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1rem;
    font-size: 1.3rem;
    text-align: center;
    font-weight: bold;
    background-color: ${colors.secondary};
    border-radius: 0.25rem 0.25rem 0px 0px;
    color: white;
    border-bottom: 2px inset #bfc8d3;

    &.active, &.active:hover {
      background-color: ${colors.background};
      color: ${colors.text};
      border-top: 2px inset #bfc8d3;
      border-left: 2px inset #bfc8d3;
      border-right: 2px inset #bfc8d3;
      border-bottom: none;
    }
    &:hover {
      background-color: ${colors.primary}
    }
  }
`
export const Title1 = styled.h1`
  font-size: 3rem;
  padding: 1.5rem 1.5rem 2rem 1.5rem;
  color: white;
  background-color: ${colors.text};
`