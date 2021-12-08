import styled from 'styled-components'
import colors from '../../bases/colors'

export const IconsDiv = styled.div`
display: flex;
flex-direction: column;
padding: 0 .8rem;
& div {
    width: 0;
    height: 0;
    border-right: 0.35rem solid transparent;
    border-left: 0.35rem solid transparent;
    margin: 0.1rem;
  }
`
export const IconButtonUp = styled.div`
  border-bottom: 0.45rem solid rgba(147, 173, 24, 0.6);
  &:hover {
    border-bottom: 0.45rem solid ${colors.primary};
  }
  &:focus {
    border-bottom: 0.45rem solid ${colors.primary};
  }
`
export const IconButtonDown = styled.div`
  border-top: 0.45rem solid rgba(147, 173, 24, 0.6);
  &:hover {
    border-top: 0.45rem solid ${colors.primary};
  }
  &:focus {
    border-top: 0.45rem solid ${colors.primary};
  }
`
