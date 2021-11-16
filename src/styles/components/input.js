import styled from 'styled-components'
import colors from '../bases/colors'

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: ${(props) => props.direction};
  justify-content: left;
  margin-bottom: .5rem;
`
export const InputLabel = styled.label`
  font-weight: bold;
  padding: .5rem 0;
`
export const InputStyle = styled.input`
  padding: 5px;
  border-radius: 0.25rem;
  border: 2px inset ${colors.secondary};
  background-color: white;
  &:hover, &:focus {
    background-color: rgba(188, 140, 242, 0.1);
  }
  &:focus-visible {
    outline: none;
  }
`
