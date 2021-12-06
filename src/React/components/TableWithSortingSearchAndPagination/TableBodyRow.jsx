// IMPORTS // ______________________________________________________________

import React from 'react'
import PropTypes from 'prop-types'

// JSX // _________________________________________________________________

/**
 * TableBodyRow component to display table body rows
 * @name TableBodyRow
 * @param {object} props 
 * @returns {?JSX}
 */

const TableBodyRow = (props) => {
  return props.keysToDisplay.map((el, index) => (
    <td key={index}>{props.element[el.id]}</td>
  ))
}

// PROPTYPES // ___________________________________________________________

TableBodyRow.propTypes = {
  keysToDisplay: PropTypes.array.isRequired,
  element: PropTypes.object.isRequired
}

// EXPORT // ______________________________________________________________

export default TableBodyRow
