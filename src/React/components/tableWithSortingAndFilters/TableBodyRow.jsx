import React from 'react'

const TableBodyRow = ({ element, keysToDisplay }) => {
  return keysToDisplay.map((el, index) => (
    <td key={index}>{element[el.id]}</td>
  ))
}

export default TableBodyRow
