import styled from 'styled-components'

export const EntriesStyle = styled.div`
display: flex;
align-items: center;
& > div {
  display: inline;
  & > label {
    font-weight: normal;
  }
}
`

export const EntriesText = styled.p`
  padding-left: 0.4rem;
`
