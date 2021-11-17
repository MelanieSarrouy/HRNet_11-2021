import React from 'react'
import styled from 'styled-components'
import SVG from './SVG'
// import colors from '../styles/bases/colors'
export const TableStyle = styled.table`
  width: 100%;
`
export const THead = styled.thead`
  & > tr {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`
export const TBody = styled.tbody`
  border-top: 1px solid black;
  border-bottom: 1px solid black;
`
export const Th = styled.th`
  ${'' /* display: flex;
  align-items: center;
  padding: 0.5rem; */}
`
const Table = () => {
  return (
    <TableStyle>
      <THead>
        <tr>
          <Th>
            First Name
            <SVG />
          </Th>
          <Th>
            Last Name
            <SVG />
          </Th>
          <Th>
            Start Date
            <SVG />
          </Th>
          <Th>
            Department
            <SVG />
          </Th>
          <Th>
            Date of Birth
            <SVG />
          </Th>
          <Th>
            Street
            <SVG />
          </Th>
          <Th>
            City
            <SVG />
          </Th>
          <Th>
            State
            <SVG />
          </Th>
          <Th>
            Zip code
            <SVG />
          </Th>
        </tr>
      </THead>
      <TBody>
        <tr>
          <td>a</td>
          <td>b</td>
          <td>c</td>
          <td>d</td>
          <td>e</td>
          <td>f</td>
          <td>g</td>
          <td>h</td>
          <td>i</td>
        </tr>
      </TBody>
      <tfoot></tfoot>
    </TableStyle>
  )
}

export default Table
