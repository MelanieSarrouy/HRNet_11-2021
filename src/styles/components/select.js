import styled from 'styled-components'
import colors from '../bases/colors'

export const SelectStyle = styled.select`
  padding: .5rem .35rem;
  border-radius: 0.25rem;
  border: 1px inset ${colors.background};
  font-size: .9rem;
  background-color: white;
  height: auto;
  &:hover,
  &:focus {
    background-color: rgba(188, 140, 242, 0.1);
  }
  &:focus-visible {
    outline: none;
  }
  @media (max-width: 575px) {
    width: 100%;
  }
`
