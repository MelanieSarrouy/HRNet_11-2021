import styled from 'styled-components'

export const FiltersWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
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
  padding-left: 0.4rem;
`
export const Button = styled.button`
  text-align: center;
  width: 2rem;
  height: 2rem;
  margin: 0.4rem;
  border-radius: .5rem;
`
