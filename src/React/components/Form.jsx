// IMPORTS // ______________________________________________________________

import React, { useState } from 'react'
import { useStore } from 'react-redux'
// components imports
import Input from './Input'
import Select from './Select'
// functions imports
import { sortDepartments } from '../../helpers/form/sortDepartments'
// styles imports
import {
  FormStyle,
  DivButton,
  DivInputDateWrapper,
  DivInputWrapper,
  DivInputZipWrapper,
  Error,
  FieldsetStyle,
  InputButton,
  Legend,
} from '../../styles/components/form'
// datas imports
import departments from '../../datas/departments'
import states from '../../datas/states'
// firebase imports
import { addAndGetEmployees } from '../../firebase/firebaseServices'

// JSX // _________________________________________________________________

/**
 * Form component to display create employee form
 * @name Form
 * @param {Object} props
 * @returns {?JSX}
 */

const Form = (props) => {
  const store = useStore()

  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [dateOfBirth, setDateOfBirth] = useState('')
  const [startDate, setStartDate] = useState('')
  const [street, setStreet] = useState('')
  const [city, setCity] = useState('')
  const [state, setState] = useState('AL')
  const [zipCode, setZipCode] = useState('')
  const [department, setDepartment] = useState('engineering')

  const [pError, setPError] = useState(false)

  const USAStates = states
  const departmentsSorted = departments.sort(sortDepartments)

  const regexDate = /^\d{4}-(0[1-9]|1[012])-(0[1-9]|[12][0-9]|3[01])$/

  const newEmployee = {
    firstName: firstName,
    lastName: lastName,
    dateOfBirth: dateOfBirth,
    startDate: startDate,
    street: street,
    city: city,
    state: state,
    zipCode: zipCode,
    department: department,
  }
  const reset = () => {
    setFirstName('')
    setLastName('')
    setDateOfBirth('')
    setStartDate('')
    setStreet('')
    setCity('')
    setState('AL')
    setZipCode('')
    setDepartment('Engineering')
  }

  const validateForm = () => {
    if (
      firstName.length >= 1 &&
      lastName.length >= 1 &&
      regexDate.test(dateOfBirth) &&
      regexDate.test(startDate) &&
      street.length >= 1 &&
      city.length >= 1 &&
      zipCode.length === 5
    ) {
      return true
    } else {
      return false
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (validateForm() === true) {
      setPError(false)
      addAndGetEmployees(store, newEmployee)
      props.setModalIsOpen(true)
      reset()
    } else {
      setPError(true)
    }
  }

  return (
    <FormStyle onSubmit={handleSubmit}>
      <DivInputWrapper>
        <Input // First Name
          direction={'column'}
          forAndId={'first-name'}
          inputType={'text'}
          value={firstName}
          required={true}
          onChange={(e) => {
            setFirstName(e.target.value)
          }}
        />
        <Input // Last Name
          direction={'column'}
          forAndId={'last-name'}
          inputType={'text'}
          value={lastName}
          required={true}
          onChange={(e) => {
            setLastName(e.target.value)
          }}
        />
      </DivInputWrapper>
      <DivInputDateWrapper>
        <Input // Date of Birth
          direction={'column'}
          forAndId={'date-of-birth'}
          inputType={'date'}
          value={dateOfBirth}
          required={true}
          onChange={(e) => {
            setDateOfBirth(e.target.value)
          }}
        />
        <Input // Start Date
          direction={'column'}
          forAndId={'start-date'}
          inputType={'date'}
          value={startDate}
          required={true}
          onChange={(e) => {
            setStartDate(e.target.value)
          }}
        />
      </DivInputDateWrapper>

      <FieldsetStyle>
        <Legend>Address</Legend>
        <DivInputWrapper>
          <Input // Street
            direction={'column'}
            forAndId={'street'}
            inputType={'text'}
            value={street}
            required={true}
            onChange={(e) => {
              setStreet(e.target.value)
            }}
          />
          <Input // City
            direction={'column'}
            forAndId={'city'}
            inputType={'text'}
            value={city}
            required={true}
            onChange={(e) => {
              setCity(e.target.value)
            }}
          />
        </DivInputWrapper>
        <Select // States
          direction={'column'}
          alignItems={'left'}
          forAndId={'state'}
          value={state}
          onChange={(e) => {
            setState(e.target.value)
          }}
          optionsList={USAStates}
        />
        <DivInputZipWrapper>
          <Input // Zip Code
            direction={'row'}
            forAndId={'zip-code'}
            inputType={'number'}
            value={zipCode}
            required={true}
            onChange={(e) => {
              setZipCode(e.target.value)
            }}
          />
        </DivInputZipWrapper>
      </FieldsetStyle>

      <Select // Department
        direction={'column'}
        alignItems={'left'}
        forAndId={'department'}
        value={department}
        onChange={(e) => {
          setDepartment(e.target.value)
        }}
        optionsList={departmentsSorted}
      />

      {pError && <Error>Please fill fields correctly</Error>}

      <DivButton>
        <InputButton type="submit" value="Save" data-testid="save" />
      </DivButton>
    </FormStyle>
  )
}

export default Form
