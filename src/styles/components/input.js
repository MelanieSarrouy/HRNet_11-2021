import styled from 'styled-components'
import colors from '../bases/colors'

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: ${(props) => props.direction};
  justify-content: left;
  padding: .4rem 0;
`
export const InputLabel = styled.label`
  font-weight: bold;
  padding: .4rem .4rem .4rem 0;
  color: ${colors.text};
`
export const InputStyle = styled.input`
  padding: .5rem .35rem;
  border-radius: 0.25rem;
  border: 1px inset ${colors.background};
  font-size: .9rem;
  height: auto;
  &:hover, &:focus {
    background-color: rgba(188, 140, 242, 0.1);
  }
  &:focus-visible {
    outline: none;
  }
`
