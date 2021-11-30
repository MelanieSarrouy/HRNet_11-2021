import styled from 'styled-components'
import colors from '../../bases/colors'

export const IconsDiv = styled.div`
display: flex;
flex-direction: column;
padding: 0 .8rem;
`
export const IconButton = styled.button`
background-color: ${colors.background};
color: rgba(0, 0, 0, .4);
&:hover {
  background-color: ${colors.background};
  opacity: 0.5;
}
&:focus {
  color: ${colors.primary};
}
`
