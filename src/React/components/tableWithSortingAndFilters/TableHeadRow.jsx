import React from 'react'
import { ThDiv } from '../../../styles/components/tableWithSortingAndFilters/tableHeadRow'
import Sorts from './Sorts'

const TableHeadRow = ({ element, list, employeesToDisplay }) => {
  return (
    <ThDiv>
      <p>{element.name}</p>
      <Sorts
        id={element.id}
        list={list}
        employeesToDisplay={employeesToDisplay}
      />
    </ThDiv>
  )
}

export default TableHeadRow
