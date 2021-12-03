import React from 'react'

const TableBodyRow = (props) => {
  return props.keysToDisplay.map((el, index) => (
    <td key={index}>{props.element[el.id]}</td>
  ))
}

export default TableBodyRow
