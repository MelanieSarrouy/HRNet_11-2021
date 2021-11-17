import styled from 'styled-components'
import colors from '../bases/colors'

export const Main = styled.main`
  padding: 1rem 1.5rem;
  border-left: 2px inset #bfc8d3;
  border-right: 2px inset #bfc8d3;
  border-bottom: 2px inset #bfc8d3;
  border-radius: 0px 0px 5px 5px;
  box-shadow: 0px 3px 3px rgba(0, 0, 0, 0.2);
  background-color: ${colors.background}
`
export const Form = styled.form`
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
  border-style: double none double none;
  border-width: 1px;
  border-color: black;
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
export const SelectStyle = styled.select`
  padding: .5rem .35rem;
  border-radius: 0.25rem;
  border: 1px inset ${colors.background};
  font-size: .9rem;
  background-color: white;
  height: auto;
  &:hover,
  &:focus {
    background-color: rgba(188, 140, 242, 0.1);
  }
  &:focus-visible {
    outline: none;
  }
  @media (max-width: 575px) {
    width: 100%;
  }
`
export const Legend = styled.legend`
  padding: 1rem 1rem 1rem 0;
  font-style: italic;
`

