import React from 'react'
import { useDispatch } from 'react-redux'
import { dynamicSortDown } from '../../../helpers/dynamicSortDown'
import { dynamicSortUp } from '../../../helpers/dynamicSortUp'
import { employeesListSuccess } from '../../../Redux/actions/actionGetEmployees'
import {
  IconButton,
  IconsDiv,
} from '../../../styles/components/tableWithSortingAndFilters/sorts'

const Sorts = ({ id, list }) => {
  const dispatch = useDispatch()

  const handleClickUp = (e) => {
    e.preventDefault()
    const fullId = e.target.id
    const id = fullId.split('-')[0]
    const newList = Array.from(list).sort(dynamicSortUp(`${id}`))
    dispatch(employeesListSuccess(newList))
  }
  const handleClickDown = (e) => {
    e.preventDefault()
    const fullId = e.target.id
    const id = fullId.split('-')[0]
    const newList = Array.from(list).sort(dynamicSortDown(`${id}`))
    dispatch(employeesListSuccess(newList))
  }

  return (
    <IconsDiv id={id}>
      <IconButton
        id={`${id}-iconUp`}
        className="fas fa-caret-up"
        onClick={handleClickUp}
      ></IconButton>
      <IconButton
        id={`${id}-iconDown`}
        className="fas fa-caret-down"
        onClick={handleClickDown}
      ></IconButton>
    </IconsDiv>
  )
}

export default Sorts
