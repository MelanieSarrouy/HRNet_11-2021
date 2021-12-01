import React from 'react'
import { ThDiv } from '../../../styles/components/tableWithSortingAndFilters/tableHeadRow'
import Sorts from './Sorts'

const TableHeadRow = ({ element, list, listToDisplay }) => {
  return (
    <ThDiv>
      <p>{element.name}</p>
      <Sorts
        id={element.id}
        list={list}
        listToDisplay={listToDisplay}
      />
    </ThDiv>
  )
}

export default TableHeadRow
