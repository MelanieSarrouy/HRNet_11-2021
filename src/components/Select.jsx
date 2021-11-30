import React from 'react'
import { capitalizeFirstLetter } from '../helpers/capitalizeFirstLetter'
import { InputLabel, InputWrapper } from '../styles/components/input'
import { SelectStyle } from '../styles/components/select'

const Select = ({
  direction,
  alignItems,
  forAndId,
  value,
  onChange,
  optionsList,
}) => {
  return (
    <InputWrapper direction={direction} alignItems={alignItems}>
      <InputLabel htmlFor={forAndId}>
        {capitalizeFirstLetter(forAndId)}
      </InputLabel>
      <SelectStyle
        name={forAndId}
        id={forAndId}
        value={value}
        onChange={onChange}
      >
        {optionsList.map((option, index) => {
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

export default Select
