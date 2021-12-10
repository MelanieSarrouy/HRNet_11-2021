// IMPORTS // ______________________________________________________________

import React from 'react'
import PropTypes from 'prop-types'
// functions imports
import { capitalizeFirstLetter } from '../../helpers/capitalizeFirstLetter'
// styles imports
import {
  InputLabel,
  InputStyle,
  InputWrapper,
} from '../../styles/components/input'

// JSX // _________________________________________________________________

/**
 * Input component to display input fields
 * @name Input
 * @param {object} props
 * @returns {?JSX}
 */

const Input = (props) => {
  return (
    <InputWrapper direction={props.direction}>
      <InputLabel htmlFor={props.forAndId}>
        {capitalizeFirstLetter(props.forAndId)}
      </InputLabel>
      <InputStyle
        data-testid={props.forAndId}
        type={props.inputType}
        id={props.forAndId}
        value={props.value}
        onChange={props.onChange}
        required={props.required}
      />
    </InputWrapper>
  )
}

// PROPTYPES // ___________________________________________________________

Input.propTypes = {
  direction: PropTypes.string.isRequired,
  forAndId: PropTypes.string.isRequired,
  inputType: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([
    PropTypes.string.isRequired,
    PropTypes.number.isRequired
  ]),
  onChange: PropTypes.func.isRequired,
  required: PropTypes.bool.isRequired
}

// EXPORT // ______________________________________________________________

export default Input
