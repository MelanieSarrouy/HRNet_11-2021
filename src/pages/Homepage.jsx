import React, { useState } from 'react'
import Input from '../components/Input'
import departments from '../datas/department'
import states from '../datas/states'
import { InputLabel, InputWrapper } from '../styles/components/input'
import {
  Main,
  Form,
  DivButton,
  DivInputWrapper,
  DivInputWrapperLittle,
  FieldsetStyle,
  InputButton,
  SelectStyle,
} from '../styles/pages/homepage'

const Homepage = () => {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [dateOfBirth, setDateOfBirth] = useState('')
  const [startDate, setStartDate] = useState('')
  const [street, setStreet] = useState('')
  const [city, setCity] = useState('')
  const [zipCode, setZipCode] = useState('')
  const departmentSorted = departments.sort()
  const USAStates = states

  return (
    <Main>
      <Form>
        <DivInputWrapper>
          <Input
            direction={'column'}
            forAndId={'first-name'}
            inputType={'text'}
            value={firstName}
            onChange={(e) => {
              setFirstName(e.target.value)
            }}
          />
          <Input
            direction={'column'}
            forAndId={'last-name'}
            inputType={'text'}
            value={lastName}
            onChange={(e) => {
              setLastName(e.target.value)
            }}
          />
        </DivInputWrapper>
        <DivInputWrapperLittle>
          <Input
            direction={'column'}
            forAndId={'date-of-birth'}
            inputType={'date'}
            value={dateOfBirth}
            onChange={(e) => {
              setDateOfBirth(e.target.value)
            }}
          />
          <Input
            direction={'column'}
            forAndId={'start-date'}
            inputType={'date'}
            value={startDate}
            onChange={(e) => {
              setStartDate(e.target.value)
            }}
          />
        </DivInputWrapperLittle>

        <FieldsetStyle>
          <legend>Address</legend>
          <DivInputWrapper>
            <Input
              direction={'column'}
              forAndId={'street'}
              inputType={'text'}
              value={street}
              onChange={(e) => {
                setStreet(e.target.value)
              }}
            />
            <Input
              direction={'column'}
              forAndId={'city'}
              inputType={'text'}
              value={city}
              onChange={(e) => {
                setCity(e.target.value)
              }}
            />
          </DivInputWrapper>

          <InputWrapper direction={'column'}>
            <InputLabel htmlFor="state">State</InputLabel>
            <SelectStyle name="state" id="state">
              {USAStates.map((state, index) => {
                return (
                  <option key={index} value={state.abbreviation}>
                    {state.name}
                  </option>
                )
              })}
            </SelectStyle>
          </InputWrapper>

          <DivInputWrapperLittle>
            <Input
              direction={'row'}
              forAndId={'zip-code'}
              inputType={'number'}
              value={zipCode}
              onChange={(e) => {
                setZipCode(e.target.value)
              }}
            />
          </DivInputWrapperLittle>
        </FieldsetStyle>

        <InputWrapper direction={'column'}>
          <InputLabel htmlFor="department">Department</InputLabel>
          <SelectStyle name="department" id="department">
            {departmentSorted.map((department, index) => {
              return (
                <option key={index} value={department}>
                  {department}
                </option>
              )
            })}
          </SelectStyle>
        </InputWrapper>
        <DivButton>
          <InputButton type="submit" value="Save" />
        </DivButton>
      </Form>

      <div id="confirmation-modale"></div>
    </Main>
  )
}

export default Homepage
