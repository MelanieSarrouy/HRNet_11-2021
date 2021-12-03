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

const Input = (props) => {
  return (
    <InputWrapper direction={props.direction}>
      <InputLabel htmlFor={props.forAndId}>
        {capitalizeFirstLetter(props.forAndId)}
      </InputLabel>
      <InputStyle
        type={props.inputType}
        id={props.forAndId}
        value={props.value}
        onChange={props.onChange}
        required={props.required}
      />
    </InputWrapper>
  )
}

export default Input
