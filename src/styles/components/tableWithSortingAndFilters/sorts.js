import styled from 'styled-components'
import colors from '../../bases/colors'

export const IconsDiv = styled.div`
display: flex;
flex-direction: column;
padding: 0 .8rem;
`
export const IconButton = styled.button`
background-color: ${colors.background};
color: rgba(147, 173, 24, 0.6);
&:hover {
  color: ${colors.primary};
}
&:focus {
  color: ${colors.primary};
}
`
