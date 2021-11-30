import { capitalizeFirstLetter } from '../../helpers/capitalizeFirstLetter'
import {
  InputLabel,
  InputStyle,
  InputWrapper,
} from '../../styles/components/input'

/**
 * Input component to display input buttons
 * @name Input
 * @param {string} forAndId
 * @param {string} inputType
 * @param {string} direction
 * @param {string} value
 * @param {string} onChange
 * @returns {?JSX}
 */

const Input = ({
  forAndId,
  inputType,
  direction,
  value,
  onChange,
  required,
}) => {
  return (
    <InputWrapper direction={direction}>
      <InputLabel htmlFor={forAndId}>
        {capitalizeFirstLetter(forAndId)}
      </InputLabel>
      <InputStyle
        type={inputType}
        id={forAndId}
        value={value}
        onChange={onChange}
        required={required}
      />
    </InputWrapper>
  )
}

export default Input
