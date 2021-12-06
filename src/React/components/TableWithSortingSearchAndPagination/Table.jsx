// IMPORTS // ______________________________________________________________

import React from 'react'
import PropTypes from 'prop-types'
// styles imports
import {
  TableContainer,
  TableStyle,
  TBody,
  TrBody,
  TrHead,
} from '../../../styles/components/tableWithSortingAndFilters/table'
// components imports
import TableBodyRow from './TableBodyRow'
import TableHeadRow from './TableHeadRow'

// JSX // _________________________________________________________________

/**
 * Table component to display the table
 * @name Table
 * @param {object} props 
 * @returns {?JSX}
 */

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

// PROPTYPES // ___________________________________________________________

Table.propTypes = {
  keysToDisplay: PropTypes.array.isRequired,
  list: PropTypes.array.isRequired,
  listToDisplay: PropTypes.array.isRequired
}

// EXPORT // ______________________________________________________________

export default Table
