// IMPORTS // ______________________________________________________________

import React from 'react'
import PropTypes from 'prop-types'
// functions imports
import { capitalizeFirstLetter } from '../../helpers/capitalizeFirstLetter'
// styles imports
import { InputLabel, InputWrapper } from '../../styles/components/input'
import { SelectStyle } from '../../styles/components/select'

// JSX // _________________________________________________________________

/**
 * Select component to display select dropdowns
 * @name Select
 * @param {object} props
 * @returns {?JSX}
 */

const Select = (props) => {
  return (
    <InputWrapper direction={props.direction} alignItems={props.alignItems}>
      <InputLabel htmlFor={props.forAndId}>
        {capitalizeFirstLetter(props.forAndId)}
      </InputLabel>
      <SelectStyle
        name={props.forAndId}
        id={props.forAndId}
        data-testid={props.forAndId}
        value={props.value}
        onChange={props.onChange}
      >
        {props.optionsList.map((option, index) => {
          return (
            <option key={index} value={option.value}>
              {option.label}
            </option>
          )
        })}
      </SelectStyle>
    </InputWrapper>
  )
}

// PROPTYPES // ___________________________________________________________

Select.propTypes = {
  direction: PropTypes.string.isRequired,
  alignItems: PropTypes.string.isRequired,
  forAndId: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([
    PropTypes.string.isRequired,
    PropTypes.number.isRequired
  ]),
  onChange: PropTypes.func.isRequired,
  optionsList: PropTypes.array.isRequired
}

// EXPORT // ______________________________________________________________

export default Select
