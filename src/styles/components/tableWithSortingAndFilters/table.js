import styled from 'styled-components'
import colors from '../../bases/colors'

export const TableContainer = styled.div`
  overflow-x: auto;
`
export const TableStyle = styled.table`
  width: 100%;
`
export const TrHead = styled.tr`
  & > th {
    padding: .4rem .6rem;
    vertical-align: middle;
    white-space: nowrap;
  }
`
export const TBody = styled.tbody`
  border-top: 1px solid black;
  border-bottom: 1px solid black;
`
export const TrBody = styled.tr`
  background-color: white;

  &:nth-child(even) {
    background-color: rgba(147, 173, 24, 0.2);
  }
  & > td {
    border-left: 1px dotted ${colors.textLight};
    vertical-align: middle;
    font-weight: 300;
    padding: .6rem;
    line-height: 1.5rem;
    white-space: nowrap;
    ${'' /* max-width: 8rem; */}
  }
`
