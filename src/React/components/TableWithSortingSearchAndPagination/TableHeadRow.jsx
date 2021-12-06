// IMPORTS // ______________________________________________________________

import React from 'react'
import PropTypes from 'prop-types'
// styles imports
import { ThDiv } from '../../../styles/components/tableWithSortingAndFilters/tableHeadRow'
// components imports
import Sorts from './Sorts'

// JSX // _________________________________________________________________

/**
 * TableHeadRow component to display table head row
 * @name TableHeadRow
 * @param {object} props 
 * @returns {?JSX}
 */

const TableHeadRow = (props) => {
  return (
    <ThDiv>
      <p>{props.element.name}</p>
      <Sorts
        id={props.element.id}
        list={props.list}
        listToDisplay={props.listToDisplay}
      />
    </ThDiv>
  )
}

// PROPTYPES // ___________________________________________________________

TableHeadRow.propTypes = {
  element: PropTypes.object.isRequired,
  list: PropTypes.array.isRequired,
  listToDisplay: PropTypes.array.isRequired
}

// EXPORT // ______________________________________________________________


export default TableHeadRow
