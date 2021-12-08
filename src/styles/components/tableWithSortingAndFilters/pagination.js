import styled from 'styled-components'
import colors from '../../bases/colors'

export const DivPagination = styled.div`
  display: flex;
`
export const ButtonNumber = styled.button`
  font-size: 1.1rem;
  font-weight: bold;
  text-align: center;
  width: 2rem;
  height: 2rem;
  margin: 0.4rem;
  border-radius: .5rem;
  background-color: ${(props) => props.backgroundColor};
  color: ${(props) => props.color};
  &:hover {
    background-color: ${colors.primary};
    color: white;
  }
}
`
export const ButtonText = styled.button`
  text-align: center;
  padding: .4rem;
  background-color: ${colors.background};
  font-weight: bold;
  &:hover {
    color: ${colors.primary};
  }
}
`
export const TextNoButton = styled.p`
  display: flex;
  align-items: center;
  padding: 0.4rem;
  opacity: 0.4;
`
