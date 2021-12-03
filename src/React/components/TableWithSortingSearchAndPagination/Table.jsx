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

const Table = (props) => {
  return (
    <TableContainer>
      <TableStyle>
        <thead>
          <TrHead>
            {props.keysToDisplay.map((element, index) => {
              return (
                <th key={index}>
                  <TableHeadRow
                    element={element}
                    list={props.list}
                    listToDisplay={props.listToDisplay}
                  />
                </th>
              )
            })}
          </TrHead>
        </thead>
        <TBody>
          {props.listToDisplay.map((el, index) => {
            return (
              <TrBody key={index}>
                <TableBodyRow
                  element={el}
                  keysToDisplay={props.keysToDisplay}
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
