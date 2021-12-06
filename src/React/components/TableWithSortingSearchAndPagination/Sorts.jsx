// IMPORTS // ______________________________________________________________

import React from 'react'
import { useDispatch } from 'react-redux'
import PropTypes from 'prop-types'
// functions imports
import { dynamicSortDown } from '../../../helpers/dynamicSortDown'
import { dynamicSortUp } from '../../../helpers/dynamicSortUp'
// Redux actions imports
import { employeesListSuccess } from '../../../Redux/actions/actionGetEmployees'
// styles imports
import {
  IconButton,
  IconsDiv,
} from '../../../styles/components/tableWithSortingAndFilters/sorts'

// JSX // _________________________________________________________________

/**
 * Sorts component to sort data
 * @name Sorts
 * @param {object} props 
 * @returns {?JSX}
 */

const Sorts = (props) => {
  const dispatch = useDispatch()

  const handleClickUp = (e) => {
    e.preventDefault()
    const fullId = e.target.id
    const id = fullId.split('-')[0]
    const newList = Array.from(props.list).sort(dynamicSortUp(`${id}`))
    dispatch(employeesListSuccess(newList))
  }
  const handleClickDown = (e) => {
    e.preventDefault()
    const fullId = e.target.id
    const id = fullId.split('-')[0]
    const newList = Array.from(props.list).sort(dynamicSortDown(`${id}`))
    dispatch(employeesListSuccess(newList))
  }

  return (
    <IconsDiv id={props.id}>
      <IconButton
        id={`${props.id}-iconUp`}
        className="fas fa-caret-up"
        onClick={handleClickUp}
      ></IconButton>
      <IconButton
        id={`${props.id}-iconDown`}
        className="fas fa-caret-down"
        onClick={handleClickDown}
      ></IconButton>
    </IconsDiv>
  )
}

// PROPTYPES // ___________________________________________________________

Sorts.propTypes = {
  list: PropTypes.array.isRequired,
  id: PropTypes.string.isRequired
}

// EXPORT // ______________________________________________________________

export default Sorts
