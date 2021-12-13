import styled from 'styled-components'
import colors from '../bases/colors'

export const FormStyle = styled.form`
  display: flex;
  flex-direction: column;
`
export const DivInputWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 1rem;
  & > div {
    display: flex;
    flex-direction: column;
    width: 100%;
  }
  @media (max-width: 575px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
  }
`
export const DivInputDateWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  column-gap: 1rem;
  & > div {
    display: flex;
    flex-direction: column;
    width: 100%;
  }
  @media (max-width: 725px) {
    grid-template-columns: 1fr 1fr;
  }
  @media (max-width: 425px) {
    grid-template-columns: 1fr;
  }
`
export const DivInputZipWrapper = styled.div`
  display: flex;
  width: 7rem;
  & > div {
    display: flex;
    flex-direction: column;
    width: 100%;
  }
`

export const FieldsetStyle = styled.fieldset`
  display: flex;
  flex-direction: column;
  margin-top: 1rem;
  margin-bottom: 1rem;
  border-style: solid none solid none;
  border-width: 1px;
  border-color: ${colors.textLight};
  padding-bottom: 1rem;
`
export const DivButton = styled.div`
  display: flex;
  justify-content: center;
`
export const InputButton = styled.input`
  width: 10rem;
  padding: 0.5rem 1.5rem;
  margin-top: 1rem;
  font-size: 1.1rem;
  font-weight: bold;
  background-color: ${colors.secondary};
  color: white;
  text-align: center;
  cursor: pointer;
  border-radius: 0.25rem;
  &:hover {
    background-color: ${colors.primary};
    box-shadow: 0px 3px 3px rgba(0, 0, 0, 0.2);
  }
  @media (max-width: 575px) {
    width: 100%;
  }
`
export const Legend = styled.legend`
  padding: 1rem 1rem 1rem 0;
  font-style: italic;
  font-weight: 300;
  color: ${colors.text};
`
export const Error = styled.p`
  color: red;
  text-align: center;
  padding: 1rem 1rem 0 1rem;
`