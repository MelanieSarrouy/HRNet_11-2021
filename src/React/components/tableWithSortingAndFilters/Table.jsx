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

const Table = ({ listToDisplay, list, keysToDisplay }) => {
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
                    listToDisplay={listToDisplay}
                  />
                </th>
              )
            })}
          </TrHead>
        </thead>
        <TBody>
          {listToDisplay.map((el, index) => {
            return (
              <TrBody key={index}>
                <TableBodyRow
                  element={el}
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
