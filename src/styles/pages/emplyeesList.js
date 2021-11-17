import styled from 'styled-components'


export const FiltersWrapper = styled.section`
  display: flex;
  justify-content: space-between;
  padding: 1rem 0;
`
export const Entries = styled.div`
  display: flex;
  align-items: center;
  & > label {
      font-weight: normal;
  }
`
export const Search = styled.div`
  & > div {
    align-items: center;
    & > label {
      font-weight: normal;
    }
  }
`
export const EntriesText = styled.p`
  padding-left: .4rem;
`
