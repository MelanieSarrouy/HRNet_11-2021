import React from 'react'
import { TableContainer, TableStyle, TBodyContainer, TBody, ThDiv, TrHead } from '../styles/components/table'
import SVG from './SVG'

const tableHead = [
  'First Name',
  'Last Name',
  'Start Date',
  'Department',
  'Date of birth',
  'Street',
  'City',
  'State',
  'Zip Code',
]

const Table = () => {
  return (
    <TableContainer>
      <TableStyle>
        <thead>
          <TrHead>
            {tableHead.map((element, index) => {
              return (
                <th key={index}>
                  <ThDiv>
                    <p>{element}</p>
                    <SVG />
                  </ThDiv>
                </th>
              )
            })}
          </TrHead>
        </thead>
        <TBodyContainer>
          <TBody>
            <td>Calvin</td>
            <td>Hobbs</td>
            <td>12/01/2005</td>
            <td>Sales</td>
            <td>05/31/1982</td>
            <td>35 rue de la Corniche</td>
            <td>Paradis</td>
            <td>Alabama</td>
            <td>40058</td>
          </TBody>
          <TBody>
            <td>Calvin</td>
            <td>Hobbs</td>
            <td>12/01/2005</td>
            <td>Engineering</td>
            <td>05/31/1982</td>
            <td>35 rue de la Corniche</td>
            <td>Paradis</td>
            <td>Alabama</td>
            <td>40058</td>
          </TBody>
          <TBody>
            <td>Calvin</td>
            <td>Hobbs</td>
            <td>12/01/2005</td>
            <td>Human Resources</td>
            <td>05/31/1982</td>
            <td>35 rue de la Corniche</td>
            <td>Paradis</td>
            <td>Alabama</td>
            <td>40058</td>
          </TBody>
          <TBody>
            <td>Calvin</td>
            <td>Hobbs</td>
            <td>12/01/2005</td>
            <td>Marketing</td>
            <td>05/31/1982</td>
            <td>35 rue de la Corniche</td>
            <td>Paradis</td>
            <td>Alabama</td>
            <td>40058</td>
          </TBody>
        </TBodyContainer>
      </TableStyle>
    </TableContainer>
  )
}

export default Table
