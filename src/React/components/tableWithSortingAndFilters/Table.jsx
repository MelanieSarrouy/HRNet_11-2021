import React from 'react'
import {
  TableContainer,
  TableStyle,
  TBody,
  TrBody,
  TrHead,
} from '../../../styles/components/tableWithSortingAndFilters/table'
import TableBodyRow from './TableBodyRow'
import TableHeadRow from './TableHeadRow'

const Table = ({ employeesToDisplay, list, keysToDisplay }) => {
  return (
    <TableContainer>
      <TableStyle>
        <thead>
          <TrHead>
            {keysToDisplay.map((element, index) => {
              return (
                <th key={index}>
                  <TableHeadRow
                    element={element}
                    list={list}
                    employeesToDisplay={employeesToDisplay}
                  />
                </th>
              )
            })}
          </TrHead>
        </thead>
        <TBody>
          {employeesToDisplay.map((employee, index) => {
            return (
              <TrBody key={index}>
                <TableBodyRow
                  employee={employee}
                  keysToDisplay={keysToDisplay}
                />
              </TrBody>
            )
          })}
        </TBody>
      </TableStyle>
    </TableContainer>
  )
}

export default Table
