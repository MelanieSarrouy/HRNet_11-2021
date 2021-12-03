import React from 'react'
import { ThDiv } from '../../../styles/components/tableWithSortingAndFilters/tableHeadRow'
import Sorts from './Sorts'

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

export default TableHeadRow
